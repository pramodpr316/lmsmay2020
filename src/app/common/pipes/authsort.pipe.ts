import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "authsort",
})
export class AuthsortPipe implements PipeTransform {
  transform(input: any[]): any {
    if (input) {
      return input.sort((a, b) => {
        let an1: string = a.authorName;
        let an2: string = b.authorName;
        return an1 < an2 ? 1 : an1 > an2 ? -1 : 0;
      });
    }
  }
}
