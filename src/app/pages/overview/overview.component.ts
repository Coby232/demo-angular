import { Component ,signal} from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, NgFor],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  overview = signal([
    {
      title: 'Personal Account',
      description:
        'Manage your personal finances with ease by opening an account.',
      link: '/account-opening/personal-account/personal-info',
    },
    {
      title: 'Business Account',
      description:
        'Open a business account today on our platform to manage finances efficiently.',
      link: '/account-opening/business-account',
    },
    {
      title: 'Financial Insights Self Service',
      description:
        'Access tools and analytics to gain insights into your financial health.',
      link: '/self-service/',
    },
    {
      title: 'Auditing Services',
      description:
        'Ensure compliance and transparency with our auditing services.',
      link: '#',
    },
  ]);
}
