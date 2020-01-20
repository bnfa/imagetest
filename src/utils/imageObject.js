const imageObject = {
    "CustomerIdentifier": "4592-06-20-20.11.26.109675",
    "NextBestOffers": [{
            "ReferenceId": "frontpage",
            "InteractId": "000010032",
            "NBO": 1,
            "Name": "Bredbånd 100/15 Mbit",
            "Score": 90,
            "Spaces": [{
                "Id": "top-banner",
                "Width": 900,
                "Height": 400,
                "Asset": {
                    "Url": "",
                    "EmbedCode": ""
                }
            }]
        },
        {
            "ReferenceId": "spots",
            "InteractId": "000009815",
            "NBO": 2,
            "Name": "Samsung Galaxy S10+",
            "Score": 45,
            "Spaces": [{
                    "Id": "spot-right",
                    "Width": 750,
                    "Height": 300,
                    "Asset": {
                        "Url": "https://dam-dc.tdc.dk/dmm3bwsv3/4347_0_11_4_44_0_a7f0738e-10ad-455c-b259-d269f222400a_True_.png",
                        "EmbedCode": "<img src='https://dam-dc.tdc.dk/dmm3bwsv3/4347_0_11_4_44_0_a7f0738e-10ad-455c-b259-d269f222400a_True_.png' alt='' width='750px' height='300px' border='0' />"
                    }
                },
                {
                    "Id": "spot-bottom",
                    "Width": 100,
                    "Height": 300,
                    "Asset": {
                        "Url": "https://dam-dc.tdc.dk/dmm3bwsv3/4348_0_11_4_44_0_a7f0738e-10ad-455c-b259-d269f222400a_True_.png",
                        "EmbedCode": "<img src='https://dam-dc.tdc.dk/dmm3bwsv3/4348_0_11_4_44_0_a7f0738e-10ad-455c-b259-d269f222400a_True_.png' alt='' width='100px' height='300px' border='0' />"
                    }
                }
            ]
        }
    ]
}

const ImageObj = () => {
    return JSON.parse(imageObject);
}

export default ImageObj;