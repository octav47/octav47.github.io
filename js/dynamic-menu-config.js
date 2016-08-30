/*
 <ul>
 <li class="active">
 <a href="index.html" title="Dashboard"><i class="fa fa-lg fa-fw fa-home"></i> <span class="menu-item-parent">Home</span></a>
 </li>
 <li>
 <a href="projects.html" title="Projects"><i class="fa fa-file-text-o"></i> <span class="menu-item-parent">Projects</span></a>
 </li>
 <!--<li>-->
 <!--<a href="blog.html" title="Blog"><i class="fa fa-paragraph"></i> <span class="menu-item-parent">Blog</span></a>-->
 <!--</li>-->
 <!--<li>-->
 <!--<a href="gallery.html" title="Gallery"><i class="fa fa-picture-o"></i> <span class="menu-item-parent">Gallery</span></a>-->
 <!--</li>-->
 </ul>
 */

(function () {
    window.menuElements = [
        {
            href: 'index',
            title: 'Home',
            icon: 'home',
            text: 'Home'
        },
        {
            href: 'projects',
            title: 'Projects',
            icon: 'file-text-o',
            text: 'Projects'
        },
        //{
        //    href: 'gallery',
        //    title: 'My photographs',
        //    icon: 'picture-o',
        //    text: 'My photographs'
        //},
        {
            href: '#',
            title: 'Social',
            icon: 'puzzle-piece',
            text: 'Social',
            child: [{
                external: true,
                href: 'http://github.com/octav47',
                title: '@octav47',
                icon: 'github',
                text: ' code here! '
            }, {
                external: true,
                href: 'http://twitter.com/octav47',
                title: '@octav47',
                icon: 'twitter',
                text: ' @octav47 '
            }, {
                external: true,
                href: 'http://vk.com/octav',
                title: 'Kir Tribunsky',
                icon: 'vk',
                text: ' Kir Tribunsky '
            }, {
                external: true,
                href: 'https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D1%82%D1%80%D0%B8%D0%B1%D1%83%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-5692a7128',
                title: 'Kir Tribunsky',
                icon: 'linkedin',
                text: ' LinkedIn '
            }]
        }
    ];
})();