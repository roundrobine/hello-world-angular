import { GithubService } from "./../services/github.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest } from "rxjs";
import { map, mergeMap, switchMap } from "rxjs/operators";

@Component({
    selector: "github-followers",
    templateUrl: "./github-followers.component.html",
    styleUrls: ["./github-followers.component.css"],
})
export class GithubFollowersComponent implements OnInit {
    followers: any[];
    constructor(
        private route: ActivatedRoute,
        private service: GithubService
    ) {}

    ngOnInit() {
        combineLatest([this.route.paramMap, this.route.queryParamMap])
            .pipe(
                switchMap((combined) => {
                    const id = combined[0].get("id");
                    const page = combined[1].get("page");

                    return this.service.getAll();
                })
            )
            .subscribe((followers: any[]) => (this.followers = followers));
    }
}
