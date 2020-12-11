import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiExternaService {

  url = 'http://127.0.0.1:8000/api/afiliados';
  key = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZTE5Njk3Y2M2ZmQ5NGNlZGRjZGU4ODQ1ZGI2YzIxODY5ZjlkNWU3NzhkNTA5YWRlODUwYmIzOGUzOTc4ZWM5YTUxOWU4ZDc1M2NmMDdlZTkiLCJpYXQiOjE2MDc2OTg1NjksIm5iZiI6MTYwNzY5ODU2OSwiZXhwIjoxNjM5MjM0NTY5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.vR2vEa4fNFFA0mpqYSfF9o-5d4Meowrm1VZF5py5PdjCrs4VLumoDkrV2bCcIG6Um6GK43lb4j8LylReyNQhr-tDT-EukuEFZAfdbdkfu5EWqFXMAUcxpyNieNuMu0DxiZNPTfHM8Q_hgGw8bMtfdrpe1hDqPu4Pcbycw6FTa_FrMjQeFsf5FyjUl5Dw0VSycakYGLrxh2dteKK0srDNRVp3B3Dlayf9KqP8x07fqLNkF7OsRk7k7R5yKP6w3q3uRphK4bLgqH_PRBkg_GfuGIevjwBSJSxRyy4YyuW5o1yrZcQOlBcpwLwiNGTikWjeziNu7lcAMapMAU5QN1ziUzISDtEVQ5MC8_6a6SfvhmeWK3yripjJeuEcrmJ2SaI4y_4yXZTswsfSl57qamxtp4T17owW-qXmifS0EF0L7PxFqM-NFZZen8COFRqnWHi1X8QDKRCBThHPx2-sDfG3Y4HZnvwPGKo5b_1VSTEfgvDfkGAFA41r8LD9EDARh_aIyQNQTv5cyIc9Qy-FTSlayEW5lfVGuyBy7Oh3oUrM-_RH9TTn00oyvQ_rUqXwWdPSLPJ1ICwnPtJ3xirxNPRiUVnxia60Zz9--kYUHACNnapAqsXL8LAtsef41vmy22hdwAx2s-ouBOsuACUMx4ylK1MgAwpo_SUDbEFiGW0_3yA';
  constructor(private http: HttpClient) { }

  saveFile(logo) {
    let body = {
      "razao_social": "Teste afiliado",
      "nome_fantasia": "teste",
      "cnpj": 2354,
      "telefone": 8642,
      "email": "afiliado@email.com",
      "inscricao_estadual": "0000",
      "inscricao_municipal": "0000",
      "logo": logo
    };
    let headers = new HttpHeaders({ 'content-type': 'application/json', 'Authorization': this.key });
    return this.http.post(this.url, body, { headers: headers }).toPromise();

  }

}
