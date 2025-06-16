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
    'HTTP-Referer': 'https://demoapp-gules-five.vercel.app/', 
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
