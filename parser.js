import fetch from 'node-fetch';


export async function googleTranslate(word,lang1,lang2) {
    return fetch("https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=%2F&f.sid=-2478773956840019839&bl=boq_translate-webserver_20231218.06_p0&hl=en&soc-app=1&soc-platform=1&soc-device=1&_reqid=77997&rt=c", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,de;q=0.6",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"120.0.6099.111\"",
    "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.111\", \"Google Chrome\";v=\"120.0.6099.111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"10.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-client-data": "CJe2yQEIo7bJAQipncoBCJr0ygEIkqHLAQiFoM0BCNy9zQEIjuHNAQjk6c0BCKLuzQEIxO7NAQjf7s0BCIPwzQEIhvDNAQiQ8M0BGPKYzQEYxuHNARin6s0B",
    "x-goog-batchexecute-bgr": "[\";PCK4InrQAAbkFQOqxBVffFoEIIAGrkQmADQBEArZ1Cbj0-rfVdZGjQt1PyPwRu8ENTHkIf1X6gMyhltI1rVGNciTbIDnabjY4QuHQE6eHwAAAVRPAAAAGnUBBxcADErIlUTqom2E6p_1zYQDeqAcmMrWUeKGgaNQFR1lzeeEFuJhr3PfQuC21pHqgUwFz_yuIDoFgoN2UxIxoP647_2jf23KAxFbEeyMQptoFDk3LI2VEmg7fJPBsLkkNbDVX7Cu09R9QHvhaRV1GiK7CHp6J5ljGk343uEez1SQOyQLWhu4dwWlyMRJhkuNwFz0Mp962Zb3Z0Cfatkp6IJ5FxguYM3sAsb52k2s1uTGOKsj--xjQQmA9SkXPTHEYob85O8UBM-KobZ2N6EptVvt2HmY8ztPphmJ1XjdaY8p0QkW5iJjeSZk2acwUxBtHhqMsMokG5hwZUey_9shSttR27aqPmNI6jtuyOqZn8CchqECh0UqlzWSZJMHD5BuoOVoJNOUFiPtbi-xPqkdbAoqzWSsnCefriOAJ_7iB10denUpxtYyVksza-8qhEkRn2qZmVXfnpXDXGSmFGqLpBHlFODzjAvTyf99KD_uDBoNL3Q0VDFI23r_RmDs2zd6RC-Aiz503w6EJlAXmwrkfyh7hqveB2iU8MsFNywESnKUuxN1CMSKyjmYG8F4YcHJxGY5bokgMOzjdaAM5Is9ZIUw-ymcuvRMAFmlV_EjmCdqUxFZbP59iZMUdZQ78QaJXunVEgUODq5IvGO9vEIiVAX1sf_U8ShYdXP5577e_6JO4DM-S-7rP6aNmlq6o0tdPjakSL2BTbAfGaCZgKYfoDo_et7WEAVzwk3BpIDhcZ1WmJS3mgTVM51lw7ggGdVE5M-RJNXNtgrSoDVBnk7A-RfCRzNlzzMc38MvubWDiBQhK1bq11MgKSMaLdR26gUEQuNThJZYlOx5561w6b6MpgbXFhKD3H_lm6KoSCpgji344JTn4c3fpXDTYGwdbKw7XubYw8or2aOgtVu2RYTAtIpO5bjlzgogUyu4J2Dg8ZaGv8vbVlHlKX53i2wyIKFaOIimDVN-EDdikzHK4ZRGIeYajqmlLuWnMFauLIASqbkhlsKNBKNCK8bXK0mxh0bLm3HdfmzNlWbA6MWV2ktIVVXK4uF9DUrQyz_VzzsIeb0PJ_ORbuVOjGaPEzH3YvUa1y668bjj9VSVC40Fvn2PghXd2rNOWiayOF5P7BDqx47-Ix2102A46qloGlpDHfncFXg4raCox_omvrLvnXEksAYcbHuRUez3T6k3JogaW-XN6oshPN_mRQuY0WiK\",null,null,596,41,null,null,0,\"2\"]",
    "x-same-domain": "1",
    "cookie": "_ga=GA1.3.415562339.1672760658; HSID=A3bSWubLMLCAJx4d1; SSID=AY-ZiVDn3vapTg2o2; APISID=sbmmJoK9GDfppzz_/AORfVky5nXLOWBmvl; SAPISID=ur_8QA5ZjEOmfWYx/Avb77UN4csgtGDId9; __Secure-1PAPISID=ur_8QA5ZjEOmfWYx/Avb77UN4csgtGDId9; __Secure-3PAPISID=ur_8QA5ZjEOmfWYx/Avb77UN4csgtGDId9; __Secure-ENID=16.SE=TWHqbMadmofpRfnVLGu3ADJoVWbLR6VWhtAnqOzgvAtUp0SJJVs4vjMaNrA8gtoFrtUiunY7vK7-brAhmVSGmwmQ91Y6q_0OG0Nh-O9NI-8M-PZNZQsXOwhiBhlephJvf0VCgQJAZKJgBQCNUHo5P_LwcpLhmyZf1dM2TDZvLCqbH_9t3bnFXM1sZek_2_zZb91uvZFjIg5ZSoFYMYQQY6GTRl47Q0DpHlmRnSRne6i8vOvKQUucBZ2wNWwhNZkBXOrGUG6ff5pQwu5uApw71IOtf74doNyGiPUgUaQGrrEBQ6JdIPVBQCfEOWLvvNDa1edPaXpIj0PqLoNpV_XhDtVGIEVTTSV0CVYndr9KfuRYWB7dAzfHKN8xu-R2NvY0vwT_lWV8dZE; SID=dwhHCBIH0Mi65fAQjoiHcJQ8mGL2BcQGsWclzYriJDk7YKxGjt5r7bBy6fD9ATSx7gxPdg.; __Secure-1PSID=dwhHCBIH0Mi65fAQjoiHcJQ8mGL2BcQGsWclzYriJDk7YKxG-EWOFxLFNMoTkFnO79BL1w.; __Secure-3PSID=dwhHCBIH0Mi65fAQjoiHcJQ8mGL2BcQGsWclzYriJDk7YKxGT7dIxmZx21X_2ty45hna3Q.; SEARCH_SAMESITE=CgQI_JkB; OTZ=7349450_44_44_123780_40_436260; AEC=Ackid1RScETyR2ZvISrQnAlKZ0vmIBopt3rpnV9rH68z7G9qgU9xlXo_QA; NID=511=FuAkCfhkt7yYFVdpHBaxbitN37ncMznCYbg1_Ws5JplWauL9FXFhQn0U1ipprvhs2O8O4DT3WzyNGvSoIiXRDWwAm_WhsfcU7zHcmmVkX3rifalm6uRtV719eHVpzjUDhGSdtYihS5id3gyRNJCxCZfDCFcKPXn6Az95uCkKieHY8Qz-GinJgPEqxOcLUfPiCt5cfQOiTF0NJsGNmbLjURxVqglIg2fyVf6j4bVODvRgVRlI6Bya8Z4p07UJmM7-rUlgkf9FUo1RTQR0p8V7x_wOIiezr04r56iCdA6cjBfdjwzPLkoETYEbNbn9XFAZhHDs6sN7NJMvHESwaJSsEfV78XqI6V9mJTfDBSAfals3wInUdELC5s7Gj_03sHGA21dGJrZVR_SynMp_tJPKuGbTVE5ZMIwhaHPHdcb1sc0qWeS-sGdJrb6bP6VyfcHR2rwrlXX2HlM-HMHcJDii-dTptQSXLwsYJM0gh4xo4FSPnc0zrVG9hQFOGxoU-E_HNzL4UVvNRW5cAEkKJ3GR-2GmSwDiPlNR9QaI1X03dsBA9toHkgRqlWQcDXBKFmKtfb21XD7eab0Pm2IuQcsw4MFPWsfAeg0A3ac7Kodp7ydq4hfxIDpCkst1RkxIlwkNMr2_yxSnSJUtX6ahIHdj87ktt6vw3kwOZT_d2fBsWvXFjFj8cb7zIEoVU5m4ziHc7RbKwnw0VqG4iekvInz2hrISvW1VWv3F4C2oiihxOob2vl34hisBbm0Nq6rKbO5kPWV9s6r95ST9HGB6totzCcaI1keCktF-GQKPx_tf5Pap1lwnlvYe5uHfxiLMNg; 1P_JAR=2023-12-26-18; __Secure-1PSIDTS=sidts-CjIBPVxjSvFlcjYwG_rkG2cOliDG3nyb_L4aVtKsiRNZ-urMIrGayiAFqjhuWkjoXj73NBAA; __Secure-3PSIDTS=sidts-CjIBPVxjSvFlcjYwG_rkG2cOliDG3nyb_L4aVtKsiRNZ-urMIrGayiAFqjhuWkjoXj73NBAA; SIDCC=ABTWhQGU9SqS1uNiZzQ9eql4U824aWQyTj5YbVl8vyY95goruBymyHNFClxq6YuuRno_xU2FNqQ6; __Secure-1PSIDCC=ABTWhQFQUo1D0YgUc45KAR4hVwrsP1cAxokmRnKBtq8fJh0icKI2hvL8niwGCzAsscGr--tXxtQ; __Secure-3PSIDCC=ABTWhQEFDvchH5cvgdPsmrUQRSIvQJoEjMU6P6Xr6XvP_gnUDcwQE2l05wsGTtiwNecWDtzqchE",
    "Referer": "https://translate.google.com/",
    "Referrer-Policy": "origin"
  },
  "body": `f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22${encodeURI(word)}%5C%22%2C%5C%22${lang1}%5C%22%2C%5C%22${lang2}%5C%22%2C1%5D%2C%5B%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AFS6QyiOll2LZuXK1sC-VJCi44-V%3A1703616100820&`,
  "method": "POST"
})
.then(res => res.text())
.then(data => data.split('\n')[3].split('[').join('').split(']').join('').split(',')[28].split('\"')[1])
};

