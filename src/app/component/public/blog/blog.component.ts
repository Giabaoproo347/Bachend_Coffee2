import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      // Configure/customize these variables.
      const showChar = 147;  // How many characters are shown by default
      const ellipsestext = '';
      const moretext = 'Read More';
      const lesstext = 'Read Less';


      $('.more').each(function() {
        const content = $(this).html();

        if (content.length > showChar) {

          const c = content.substr(0, showChar);
          const h = content.substr(showChar, content.length - showChar);

          // tslint:disable-next-line:max-line-length
          const html = c + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
        }

      });

      $('.morelink').click(function() {
        if ($(this).hasClass('less')) {
          $(this).removeClass('less');
          $(this).html(moretext);
        } else {
          $(this).addClass('less');
          $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
      });
    });
  }

}
