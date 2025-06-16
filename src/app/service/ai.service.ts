import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AiService {

  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  private headers = new HttpHeaders({
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json',
    'HTTP-Referer': 'http://localhost:4200', 
    'X-Title': 'Angular AI Demo'
  });

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const body = {
      model: 'deepseek/deepseek-r1:free',
      messages: [
        { role: 'user', content: message }
      ]
    };

    return this.http.post(this.apiUrl, body, { headers: this.headers });
  }
}
