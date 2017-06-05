
<template>
    <div id="tool-menu">
        <ul>
            <li>
                <span class="icon-back"></span>
            </li>
            <li>
                <span class="icon-more_unfold"></span>
            </li>
            <li>
                <span class="icon-good"></span>
            </li>
            <li>
                <span class="icon-share"></span>
            </li>
            <li>
                <span class="icon-comments"></span>
            </li>
        </ul>
    </div>
</template>
<style>
@font-face {
  font-family: 'icomoon';
  src:  url('../assets/detail-tool-box/icomoon.eot?43eq9t');
  src:  url('../assets/detail-tool-box/icomoon.eot?43eq9t#iefix') format('embedded-opentype'),
    url('../assets/detail-tool-box/icomoon.ttf?43eq9t') format('truetype'),
    url('../assets/detail-tool-box/icomoon.woff?43eq9t') format('woff'),
    url('../assets/detail-tool-box/icomoon.svg?43eq9t#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-back:before {
  content: "\e900";
}
.icon-comments:before {
  content: "\e901";
}
.icon-good:before {
  content: "\e902";
}
.icon-more_unfold:before {
  content: "\e903";
}
.icon-share:before {
  content: "\e904";
}

</style>
<style  lang="stylus" rel="stylesheet/stylus">
#tool-menu
    position fixed
    bottom 0
    width 100%
    background-color #fff
    ul
        width 100%
        display flex
        flex-direction row
        li
            width 25%
</style>