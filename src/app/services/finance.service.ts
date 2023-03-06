import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) { }

  async findStock(stock: string): Promise<any> {
    const PROXY_URL = environment.PROXY_URL;
    const url  = PROXY_URL + environment.apiUrl + `${stock}.SA?region=BR&lang=pt-BR&includePrePost=false&interval=1d&useYfid=true&range=2mo`;
    return this.http.get(url).toPromise();
  }

}
