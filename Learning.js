/*
01. Install live sass compiler
02. Click watch sass
03. Create a variable 
04 . import and partial => @forword demo.scss file
     or you can import all file in index.sass file and you just 
     import index.sass file in demo.sasss fiule
05. @mixin   @include
     @mixin para-style{
     padding: 50px;
     background-color: aqua;
     }

     p{
     @include para-style()
     }
06,parameter
     @mixin para-style($size,$bg){
     padding: $size;
     background-color: $bg;
     }

     p{
     @include para-style(12,yellow);
     }
07.@extend share style with another tag
     .error {
     border: 1px #f00;
     background-color: #fdd;

     &--serious {
     @extend .error;
     border-width: 3px;
     }
     }
08.conditional 
     @mixin setFontSize($value) {
     @if $value == small {
     font-size: 12px;
     } @else if $value == medium {
     font-size: 16px;
     } @else if $value == large {
     font-size: 20px;
     } @else {
     font-size: none;
     }
     }

       
     P{
          @include setFontSize(large);
     }



*/