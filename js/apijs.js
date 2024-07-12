
iduser_global = '';
user_global = '';
idcliente_global = '';
tipocliente = '';
idvenda_global = '';
tipovenda = '';
permissao_global = '';
status_global = '';

//
// criptografia
//
function criptografia(svalor) {
            
    var xmlhttp = new XMLHttpRequest();
    var sret = '';

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Criptografia xmlns="http://tempuri.org/">' +
                    '<sText>' + svalor + '</sText>' +
                    '<sCommand>Crip</sCommand>' +
                '</Criptografia>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

    
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("CriptografiaResult")[0].childNodes[0].nodeValue;

            }
        }

    }

    xmlhttp.send(sr);


    return sret;

}

//
// login
//
function login(user, senha) {

    var xmlhttp = new XMLHttpRequest();    
    var sret='';

    xmlhttp.open('POST', 'http://192.168.1.123/wsappbcc/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Autenticacao_Usuario  xmlns="http://tempuri.org/">' +
                    '<sUser>' + user + '</sUser>' +
                    '<sPassword>' + senha + '</sPassword>' +
                '</Autenticacao_Usuario >' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Autenticacao_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// deleta cliente
//
function Delete_Cliente(cliente) {
    
    var xmlhttp = new XMLHttpRequest();
    var sret = '';

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<DeletaCliente  xmlns="http://tempuri.org/">' +
                    '<sIdCliente>' + cliente + '</sIdCliente>' +
                '</DeletaCliente >' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Autenticacao_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Consulta Agendamento
//
function Consulta_Agendamento(IdUser, dtatual) {
    
    var sret = '';

    var scmd = IdUser + ';' + dtatual;
    
    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Consulta_Agendamento xmlns="http://tempuri.org/">' +
                     '<sCommand>' + scmd2 + '</sCommand>' +
                '</Consulta_Agendamento>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("AtualizaStatusResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// atualiza status
//
function AtualizaStatus(sIdStatus, sIdRoteiro, sData, sidcoduser, scodstatus, scodsubstatus, sobservacao, sperm) {
    
    var sret = '';

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<AtualizaStatus xmlns="http://tempuri.org/">' +
                     '<sIdStatus>' + sIdStatus + '</sIdStatus>' +
                      '<sIdRoteiro>' + sIdRoteiro + '</sIdRoteiro>' +
                      '<sData>' + sData + '</sData>' +
                      '<sidcoduser>' + sidcoduser + '</sidcoduser>' +
                      '<scodstatus>' + scodstatus + '</scodstatus>' +
                      '<scodsubstatus>' + scodsubstatus + '</scodsubstatus>' +
                      '<sobservacao>' + sobservacao + '</sobservacao>' +
                      '<sperm>' + sperm + '</sperm>' +
                '</AtualizaStatus>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("AtualizaStatusResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// atualiza Ponto
//
function AtualizaPonto(sIdStatus, sIdPonto, sData, sidcoduser, scodstatus, scodsubstatus, sobservacao, sperm) {
    
    var sret = '';
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<AtualizaPonto xmlns="http://tempuri.org/">' +
                    '<sIdStatus>' + sIdStatus + '</sIdStatus>' +
                    '<sIdPonto>' + sIdPonto + '</sIdPonto>' +
                    '<sData>' + sData + '</sData>' +
                    '<sidcoduser>' + sidcoduser + '</sidcoduser>' +
                    '<scodstatus>' + scodstatus + '</scodstatus>' +
                    '<scodsubstatus>' + scodsubstatus + '</scodsubstatus>' +
                    '<sobservacao>' + sobservacao + '</sobservacao>' +
                    '<sperm>' + sperm + '</sperm>' +
                '</AtualizaPonto>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("AtualizaPontoResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Registra dados do cliente
//
function Registra_Cliente(idcliente, user, idtipocliente, tiposegmento, nome, cnpj, endereco, contato, decisor, promotor, indicacao)
{   
    var sret = '';
    
    var scmd = idcliente + ";" + user + ';' + idtipocliente + ';' + tratatexto(tiposegmento) + ';' + tratatexto(nome) + ';' + cnpj + ';' + tratatexto(endereco) + ';' + contato + ';' + decisor + ';' + promotor + ';' + indicacao;
    
    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Registra_Cliente xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Registra_Cliente>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Registra_ClienteResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Registra dados da venda
//
function Registra_Venda(idvenda, user, idtipovenda, TipoMaquina_Point, NumeroControle_Point, FormaPagamento_Point, Foto_Point, IdCodStatusVenda_QR, CadatroPix_QR, PossuiConta_QR, Email_QR, idcodcliente, scheck, stpv, snomeresp, stelefoneresp, semailmercado, snumop1, snumop2, snumop3, snumcard, schipanterior, schipatual, slat, slong, sobs, sFoto_Point2, sFoto_Point3,sfaturamento)
{
    var sret = '';
    
    var scmd = idvenda + ";" + user + ';' + idtipovenda + ';' + TipoMaquina_Point + ';' + NumeroControle_Point + ';' + FormaPagamento_Point + ';' + Foto_Point + ';' + IdCodStatusVenda_QR + ';' + CadatroPix_QR + ';' + PossuiConta_QR + ';' + Email_QR + ';' + idcodcliente + ';' + scheck + ';' + stpv + ';' + snomeresp + ';' + stelefoneresp + ';' + semailmercado + ';' + snumop1 + ';' + snumop2 + ';' + snumop3 + ';' + snumcard + ';' + schipanterior + ';' + schipatual + ';' + slat + ';' + slong + ';' + sobs + ';' + sFoto_Point2 + ';' + sFoto_Point3 + ';' + sfaturamento;
    
    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Registra_Venda xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Registra_Venda>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Registra_VendaResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;
}

//
// Registra dados do Agendamento
//
function Registra_Agendamento(sIdAgendamento, idcodrota, idcodroteiro, idcodstatus, idcodusuario, idcodgrupo, idcodmarcador, dataagendamento) {

    var sret = '';

    var scmd = sIdAgendamento + ';' + idcodrota + ';' + idcodroteiro + ';' + idcodstatus + ';' + idcodusuario + ';' + idcodgrupo + ';' + idcodmarcador + ';' + dataagendamento

    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Registra_Agendamento xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Registra_Agendamento>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Registra_AgendamentoResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// CarregaClientes
//
function CarregaClientes(user, cliente ,dtini, dtfim, nome, tipo) {

    var sret = '';
    var scmd = user + ";" + cliente + ";" + dtini + ";" + dtfim + ";" + nome + ";" + tipo;

    var scmd2 = criptografia(scmd);    

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<CarregaClientes xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</CarregaClientes>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("CarregaClientesResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// CarregaVendas
//
function CarregaVendas(user, idvenda, perfil, equipe, dtini, dtfim, tipo) {

    var sret = '';

    var scmd = user + ";" + idvenda + ";" + perfil + ";" + equipe + ";" + dtini + ";" + dtfim + ";" + tipo;

    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<CarregaVendas xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</CarregaVendas>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("CarregaVendasResult")[0].childNodes[0].nodeValue;
            }
        }
    }

    xmlhttp.send(sr);

    return sret;

}

//
// registro tempo
//
function registro_tempo(user, tempo, lat, long, imagem, endereco, shodometro, foto, skm, sduracao) {

    var sret='';
    
    var scmd = user + ';' + tempo + ';' + lat + ';' + long + ';' + imagem + ';' + endereco + ';' + shodometro + ';' + foto + ';' + skm + ';' + sduracao;
    
    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Registra_Tempo_Usuario xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Registra_Tempo_Usuario>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Registra_Tempo_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// ping tempo
//
function ping_tempo(user, lat, long, endereco) {

    var sret = '';
    var scmd = user + ';' + lat + ';' + long + ';' + endereco;


    var scmd2 = criptografia(scmd);


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Ping_Localizacao_Usuario xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Ping_Localizacao_Usuario>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    Modalvendas_clienteLabel
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Ping_Localizacao_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Rel_Tempo
//
function rel_tempo(user, data, sperm) {

    var sret = '';
    var scmd = user + ';' + data + ';' + sperm;

    var scmd2 = criptografia(scmd);
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Rel_Tempo_Usuario  xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Rel_Tempo_Usuario>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Rel_Tempo_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Rota_Usuario
//
function rota_usuario(user, sperm) {

    var sret = '';
    var scmd = user + ";" + sperm;

    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Rota_Usuario xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Rota_Usuario>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Rota_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Carrega_Promotores_Mapa
//
function Carrega_Promotores_Mapa(user) {

    var sret = '';
    var scmd = user;

    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Carrega_Promotores_Mapa xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Carrega_Promotores_Mapa>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Carrega_Promotores_MapaResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Carrega_Combo_Promotores_Indicacao
//
function Carrega_Combo_Promotores_Indicacao() {
    
    var sret = '';

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Carrega_Combo_Promotores_Indicacao xmlns="http://tempuri.org/">' +
                    
                '</Carrega_Combo_Promotores_Indicacao>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Carrega_Combo_Promotores_IndicacaoResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Consulta Agendamento
//
function Consulta_Agendamentos(IdUser) {

    var sret = '';
    
    var scmd = IdUser;

    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Consulta_Agendamentos xmlns="http://tempuri.org/">' +
                     '<sCommand>' + scmd2 + '</sCommand>' +
                '</Consulta_Agendamentos>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Consulta_AgendamentosResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Carrega_Pontos_Mapa
//
function Pontos_Usuario() {

    var sret = '';

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Pontos_Usuario xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Pontos_Usuario>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Pontos_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Pontos_Usuario
//
function Pontos_Usuario(user, sperm) {

    var sret = '';
    var scmd = user + ";" + sperm;

    //var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Pontos_Usuario xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd + '</sCommand>' +
                '</Pontos_Usuario>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Pontos_UsuarioResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// Consulta_Ult_Status
//
function Consulta_Ult_Status(istatus,user) {

    var sret = '';
    var scmd = istatus + ";" + user;

    var scmd2 = criptografia(scmd);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://www.gatlink.com.br/wsmercadopago/WS_MP_Geolocation.asmx', false);

    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soapenv:Body>' +
                '<Consulta_Ult_Status xmlns="http://tempuri.org/">' +
                    '<sCommand>' + scmd2 + '</sCommand>' +
                '</Consulta_Ult_Status>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';


    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                sret = xmlhttp.responseXML.getElementsByTagName("Consulta_Ult_StatusResult")[0].childNodes[0].nodeValue;
            }
        }

    }

    xmlhttp.send(sr);

    return sret;

}

//
// TrataTexto
//
function tratatexto(svalor){
    var snovo=svalor;

    snovo = snovo.replace('á','a');
    snovo = snovo.replace('â','a');
    snovo = snovo.replace('à','a');
    snovo = snovo.replace('ã','a');
    snovo = snovo.replace('ç','c');
    snovo = snovo.replace('é','e');
    snovo = snovo.replace('ê','e');
    snovo = snovo.replace('í','i');
    snovo = snovo.replace('ó','o');
    snovo = snovo.replace('ô','o');
    snovo = snovo.replace('õ','o');
    snovo = snovo.replace('ú','u');
    snovo = snovo.replace('ü','u');
    snovo = snovo.replace('Á','A');
    snovo = snovo.replace('Â','A');
    snovo = snovo.replace('À','A');
    snovo = snovo.replace('Ã','A');
    snovo = snovo.replace('Ç','C');
    snovo = snovo.replace('É','E');
    snovo = snovo.replace('Ê','E');
    snovo = snovo.replace('Í','I');
    snovo = snovo.replace('Ó','O');
    snovo = snovo.replace('Ô','O');
    snovo = snovo.replace('Õ','O');
    snovo = snovo.replace('Ú','U');
    snovo = snovo.replace('Ü','U');

    
    return snovo;

}


