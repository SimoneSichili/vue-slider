// Provare a riprodurre uno slider di immagini, già fatto in precedenza con jQuery, questa volta con Vue, quindi non manipolando direttamente il DOM, ma i dati di Vue, come fatto stamattina insieme.
// Bonus: aggiungiamo autoplay.

var app = new Vue(
    {
        el: '#root',
        data: {
            imageIndex: 0,
            images: [
                "https://wallpapercave.com/wp/XMnhQSq.jpg",
                "https://wallpapercave.com/wp/YKJtSPc.jpg",
                "https://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-wallpapers-21.jpg",
                "https://eskipaper.com/images/landscape-wallpaper-hd-28.jpg",
                "https://wallpapercave.com/wp/mqgLomk.jpg"
            ],
            autoplay: "",
        },
        created: function () {
            this.autoplay = setInterval(
                () => {
                    this.nextImage();
                }, 2000
            );
        },
        methods: {
            nextClick: function() {
                clearInterval(this.autoplay);
                this.nextImage();
            },
            nextImage: function() {
                this.imageIndex++;

                if(this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            },
            prevImage: function() {
                this.imageIndex--;

                if(this.imageIndex == - 1) {
                    this.imageIndex = this.images.length - 1;
                }
            },
            prevClick: function() {
                clearInterval(this.autoplay);
                this.prevImage();
            },
        },
    }
);