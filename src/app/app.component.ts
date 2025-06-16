import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiService } from './service/ai.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AiService]
})
export class AppComponent {
  title = 'demoapp';
  prompt = '';
  response = '';

  constructor(private aiService: AiService) {}

  askAI() {
    this.aiService.sendMessage(this.prompt).subscribe((res: any) => {
      this.response = res.choices[0].message.content;
    });
  }
}
