import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC1kpzDXqMy7LsJmeQlucc9omTk8G5GgCI',
      authDomain: 'bookshelves-a7668.firebaseapp.com',
      databaseURL: 'https://bookshelves-a7668.firebaseio.com',
      projectId: 'bookshelves-a7668',
      storageBucket: 'bookshelves-a7668.appspot.com',
      messagingSenderId: '100693665717',
      appId: '1:100693665717:web:0fe2991d279d9ae2b65bfc',
      measurementId: 'G-6ZJ3ZJD89M'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
