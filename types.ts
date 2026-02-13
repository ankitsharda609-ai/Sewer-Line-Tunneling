
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
