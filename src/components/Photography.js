import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function Photography() {

const images = [
  "./subway.jpg",
  "./japantemple.jpg",
  "./up.png",
  "./mevegas.jpg",
  "./ayafire.jpg",
  "./treeEcua.jpg",
  "./bald.jpg",
  "./mecave.jpg",
  "./sapa.jpg",
  "./camping.jpg",
  "./bkk.jpg",
  "./PRbooks.jpg",
  "./shama2.png",
  "./shaman.jpg",
  "./hammock.jpg",
  "./mebeacon.jpg",
  "./boyz2skool.jpg",
  "./ayabed.jpg",
  "./face1.png",
  "./crownb.jpg",
  "./pai.jpg",
  "./side.png",
  "./menmonkey.jpg",
  "./shama.png",
  "./songkran.jpg",
  "./DR.png",
  "./jcpark.jpg",
  "./menlonshaman.jpg",
  "./cave.jpg",
  "./Dadbeach.jpg",
  "./Bar.png",
  "./mofongo.jpg",
  "./boatbkk.jpg",
  "./thaisoup.jpg",
  "./skii.jpg",
]

  return (
    <div id="travel" className="mt-12">
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  );
}



