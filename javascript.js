var newsdatas=[
    {
        title: "「NEWVIEW AWARDS 2022」にて、技術力不問、アイデア勝負のプライズ「ULTRA IDEA Prize」が新設！",
        date: "2022.09.15",
        img: "https://c.files.bbci.co.uk/29D2/production/_122360701_gettyimages-1280424615.jpg"
    }, {
        title: "NEWVIEW Projectがデジタル庁「good digital award」アート部門優秀賞を受賞",
        date: "2022.09.09",
        img: "https://i.natgeofe.com/k/63b1a8a7-0081-493e-8b53-81d01261ab5d/red-panda-full-body_4x3.jpg"
    }, {
        title: "NEWVIEW BIZ ビジネスパーソン向けのラーニングプログラム/コミュニティ",
        date: "2022.08.23",
        img: "https://www.timeforkids.com/wp-content/uploads/2021/10/K1-habitat-back.jpg?w=1024"
    }
];

var vm=new Vue({
    el: "#app",
    data: {
        newsdata: newsdatas
    }
});