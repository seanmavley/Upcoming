import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  transaction_id: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.transaction_id = this.route.snapshot.params['transaction_id'];
    console.log('Transaction ID', this.transaction_id);
  }
}
