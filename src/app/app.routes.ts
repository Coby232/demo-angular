import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return Promise.resolve(
        import('./pages/get-started/get-started.component')
      ).then((m) => m.GetStartedComponent);
    },
  },

  {
    path: 'auth/login',
    loadComponent: () => {
      return Promise.resolve(import('./pages/auth/login/login.component')).then(
        (m) => m.LoginComponent
      );
    },
  },
  {
    path: 'auth/create-account',
    loadComponent: () => {
      return Promise.resolve(
        import('./pages/auth/create-account/create-account.component')
      ).then((m) => m.CreateAccountComponent);
    },
  },
  {
    path: 'home',
    loadComponent: () => {
      return Promise.resolve(import('./pages/home/home.component')).then(
        (m) => m.HomeComponent
      );
    },
    children: [
      {
        path: 'overview',
        loadComponent: () => {
          return Promise.resolve(
            import('./pages/overview/overview.component')
          ).then((m) => m.OverviewComponent);
        },
      },
      {
        path: 'account-opening/business-account',
        loadComponent: () => {
          return Promise.resolve(
            import(
              './pages/account-opening/business-account/business-account.component'
            )
          ).then((m) => m.BusinessAccountComponent);
        },
        children: [
          {
            path: 'personal-info',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/business-account/personal-info/personal-info.component'
                )
              ).then((m) => m.PersonalInfoComponent);
            },
          },
          {
            path: 'contact-and-address',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/business-account/contact-and-address/contact-and-address.component'
                )
              ).then((m) => m.ContactAndAddressComponent);
            },
          },
          {
            path: 'employment-and-financial',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/business-account/employment-and-financial/employment-and-financial.component'
                )
              ).then((m) => m.EmploymentAndFinancialComponent);
            },
          },
          {
            path: 'identification-and-verification',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/business-account/identification-and-verification/identification-and-verification.component'
                )
              ).then((m) => m.IdentificationAndVerificationComponent);
            },
          },
          {
            path: 'preferences-and-consent',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/business-account/preferences-and-consent/preferences-and-consent.component'
                )
              ).then((m) => m.PreferencesAndConsentComponent);
            },
          },
        ],
      },
      {
        path: 'account-opening/personal-account',
        loadComponent: () => {
          return Promise.resolve(
            import(
              './pages/account-opening/personal-account/personal-account.component'
            )
          ).then((m) => m.PersonalAccountComponent);
        },
        children: [
          {
            path: 'personal-info',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/personal-account/personal-info/personal-info.component'
                )
              ).then((m) => m.PersonalInfoComponent);
            },
          },
          {
            path: 'contact-and-address',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/personal-account/contact-and-address/contact-and-address.component'
                )
              ).then((m) => m.ContactAndAddressComponent);
            },
          },
          {
            path: 'employment-and-financial',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/personal-account/employment-and-financial/employment-and-financial.component'
                )
              ).then((m) => m.EmploymentAndFinancialComponent);
            },
          },
          {
            path: 'identification-and-verification',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/personal-account/identification-and-verification/identification-and-verification.component'
                )
              ).then((m) => m.IdentificationAndVerificationComponent);
            },
          },
          {
            path: 'preferences-and-consent',
            loadComponent: () => {
              return Promise.resolve(
                import(
                  './pages/account-opening/personal-account/preferences-and-consent/preferences-and-consent.component'
                )
              ).then((m) => m.PreferencesAndConsentComponent);
            },
          },
        ],
      },
      {
        path: 'self-service/loan',
        loadComponent: () => {
          return Promise.resolve(
            import('./pages/self-service/loan/loan.component')
          ).then((m) => m.LoanComponent);
        },
      },
      {
        path: 'self-service/withdrawal',
        loadComponent: () => {
          return Promise.resolve(
            import('./pages/self-service/withdrawal/withdrawal.component')
          ).then((m) => m.WithdrawalComponent);
        },
      },
      {
        path: 'self-service/money-transfer',
        loadComponent: () => {
          return Promise.resolve(
            import(
              './pages/self-service/money-transfer/money-transfer.component'
            )
          ).then((m) => m.MoneyTransferComponent);
        },
      },
    ],
  }, 
  {
    path: '**',
    loadComponent: () => {
      return Promise.resolve(
        import('./pages/not-found/not-found.component')
      ).then((m) => m.NotFoundComponent);
    },
  },
];
