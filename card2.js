const nft = [
    {
      id: 1,
      title: "Equilibrium ",
      number: "#3429",
      days: "7 days left",
      price: "0.041ETH",
      img: "./images/aa.jpg",
      desc: "Our Equilibrium collection ptomotes balance and calm",
      authorImg: "./images/flower.jpg",
      author: "A A"
    },
    {
      id: 2,
      title: "Equilibrium ",
      days: "6 days left",
      number: "#3429",
      price: "0.041ETH",
      img: "./images/image-equilibrium.jpg",
      desc: "Our Equilibrium collection ptomotes balance and calm",
      
      authorImg: "./images/image-avatar.png",
      author: "Jules Wyvern"
    },
    {
      id: 3,
      title: "Equilibrium ",
      days: "4 days left",
      number: "#3429",
      price: "0.041ETH",
      img: "./images/ttt.jpg",
      desc: "Our Equilibrium collection ptomotes balance and calm",
      authorImg: "./images/mother.jpg",
      author: "Aisuluu A"
    },

    {
        id: 4,
        title: "Equilibrium ",
        days: "20 days left",
        number: "#3429",
        price: "0.041ETH",
        img: "./images/mother.jpg",
        desc: "Our Equilibrium collection ptomotes balance and calm",
        authorImg: "./images/yy.jpg",
        author: "Jfghhf"
      },

      {
        id: 5,
        title: "Equilibrium ",
        days: "20 days left",
        number: "#3429",
        price: "0.041ETH",
        img: "./images/yy.jpg",
        desc: "Our Equilibrium collection ptomotes balance and calm",
        authorImg: "./images/flower.jpg",
        author: "Jfghhf"
      },
  ];
  
  const nftsInner = document.body;
  nftsInner.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: hsl(217, 54%, 11%);
        align-items: center;
        vertical-align: middle;
  `;
  
  window.addEventListener("load", function () {
    displayNftsItems(nft);
  });
  
  function displayNftsItems(nfts) {
    let displayNfts = nfts.map(function (item) {
      return `
      <div id="wrapper" key="${item.id}" style="
                                background-color: hsl(216, 50%, 16%);
                                width: 300px;
                                margin: 50px 50px;
                                border-radius: 10px;
                                box-shadow:
                                0 0 0 21px hsl(218, 54%, 11%);" >
      
        <div style="margin: auto;
                    width: 90%;
                    padding-bottom: 15px;
        ">
            <img src="${item.img}" alt="" style="    width: 100%;
            border-radius: 10px;
            margin: 15px auto;"/>
        
            
            <h3 style="
                         color: white; 
                         font-weight: 600;
            ">${item.title} ${item.number}</h3>
            
            <p  style=" font-size: 18px;
                        color: hsl(215, 51%, 70%);
                        font-weight: 400;
            ">${item.desc} </p>
            
            <ul style="
                        display: flex;
                        justify-content: space-between;
                        font-weight: 400;
                        padding-bottom: 20px;
                        padding-top: 20px;
                        border-bottom: 1px solid hsl(215, 51%, 70%);
                        list-style: none;
                        padding-left: 0;
                        margin-bottom:0;
            ">
                <li style="color: hsl(178, 100%, 50%);"><img src="./images/icon-ethereum.svg"> ${item.price} </li>
                <li style="color: hsl(215, 51%, 70%);"><img src="./images/icon-clock.svg">${item.days} </li>
            </ul>

            <div style="
            display: flex;
            //justify-content: center;
            //vertical-align:center;
            align-items: center;
            list-style: none;
            padding: 0;
            ">
                <img src="${item.authorImg}" style="
                                            width: 25px;
                                            border: 1px solid white;
                                            border-radius:20px;
                                            
                                            margin-right: 10px;
                ">
                <p style="  color: white;
                            font-weight: 400;
                "> Creation of 
                        <a style="font-weight: 400;
                                color: hsl(178, 100%, 50%);
                                ">${item.author}
                        </a>
                </p> 
            
            </div>
        
         </div>

    </div>`;
    });
  
    displayNfts = displayNfts.join("");
    nftsInner.innerHTML = displayNfts  ;
    alert(`Я оцениваю свою работу на 200 баллов` )
  }
  

  