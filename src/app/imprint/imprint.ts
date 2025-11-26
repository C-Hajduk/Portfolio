import { Component } from '@angular/core';
import { LegalNotice } from "./legal-notice/legal-notice";
import { Header } from "../shared/header/header";
import { Footer } from "../shared/footer/footer";
import { PrivacyPolicy } from "./privacy-policy/privacy-policy";

@Component({
  selector: 'app-imprint',
  imports: [LegalNotice, Header, Footer, PrivacyPolicy],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
