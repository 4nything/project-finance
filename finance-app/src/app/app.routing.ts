import { Routes } from "@angular/router";
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { AccountingComponent } from "./views/accounting/accounting.component";

export const rootRoutingConfig: Routes = [

    {
        path: '',
        component: WelcomeComponent,
    },
    { path: 'accounting', component: AccountingComponent}
]