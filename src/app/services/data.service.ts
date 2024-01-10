import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class DataService {
    classArray = [
        {
            "letter": "அ",
            "folder": "001",
            "class": "0"
        },
        {
            "letter": "ஆ",
            "folder": "002",
            "class": "1"
        },
        {
            "letter": "இ",
            "folder": "003",
            "class": "2"
        },
        {
            "letter": "ஈ",
            "folder": "004",
            "class": "3"
        },
        {
            "letter": "உ",
            "folder": "005",
            "class": "4"
        },
        {
            "letter": "ஊ",
            "folder": "006",
            "class": "5"
        },
        {
            "letter": "எ",
            "folder": "007",
            "class": "6"
        },
        {
            "letter": "ஏ",
            "folder": "008",
            "class": "7"
        },
        {
            "letter": "ஐ",
            "folder": "009",
            "class": "8"
        },
        {
            "letter": "ஒ",
            "folder": "010",
            "class": "9"
        },
        {
            "letter": "ஓ",
            "folder": "011",
            "class": "10"
        },
        {
            "letter": "ஔ",
            "folder": "012",
            "class": "11"
        },
        {
            "letter": "ஃ",
            "folder": "013",
            "class": "12"
        },
        {
            "letter": "க்",
            "folder": "014",
            "class": "13"
        },
        {
            "letter": "ங்",
            "folder": "026",
            "class": "14"
        },
        {
            "letter": "ச்",
            "folder": "020",
            "class": "15"
        },
        {
            "letter": "ஞ்",
            "folder": "032",
            "class": "16"
        },
        {
            "letter": "ட்",
            "folder": "038",
            "class": "17"
        },
        {
            "letter": "ண்",
            "folder": "044",
            "class": "18"
        },
        {
            "letter": "த்",
            "folder": "050",
            "class": "19"
        },
        {
            "letter": "ந்",
            "folder": "056",
            "class": "20"
        },
        {
            "letter": "ப்",
            "folder": "062",
            "class": "21"
        },
        {
            "letter": "ம்",
            "folder": "068",
            "class": "22"
        },
        {
            "letter": "ய்",
            "folder": "074",
            "class": "23"
        },
        {
            "letter": "ர்",
            "folder": "080",
            "class": "24"
        },
        {
            "letter": "ல்",
            "folder": "086",
            "class": "25"
        },
        {
            "letter": "வ்",
            "folder": "104",
            "class": "26"
        },
        {
            "letter": "ழ்",
            "folder": "110",
            "class": "27"
        },
        {
            "letter": "ள்",
            "folder": "092",
            "class": "28"
        },
        {
            "letter": "ற்",
            "folder": "098",
            "class": "29"
        },
        {
            "letter": "ன்",
            "folder": "116",
            "class": "30"
        },
        {
            "letter": "க",
            "folder": "015",
            "class": "31"
        },
        {
            "letter": "ங",
            "folder": "027",
            "class": "32"
        },
        {
            "letter": "ச",
            "folder": "021",
            "class": "33"
        },
        {
            "letter": "ஞ",
            "folder": "033",
            "class": "34"
        },
        {
            "letter": "ட",
            "folder": "039",
            "class": "35"
        },
        {
            "letter": "ண",
            "folder": "045",
            "class": "36"
        },
        {
            "letter": "த",
            "folder": "051",
            "class": "37"
        },
        {
            "letter": "ந",
            "folder": "057",
            "class": "38"
        },
        {
            "letter": "ப",
            "folder": "063",
            "class": "39"
        },
        {
            "letter": "ம",
            "folder": "069",
            "class": "40"
        },
        {
            "letter": "ய",
            "folder": "075",
            "class": "41"
        },
        {
            "letter": "ர",
            "folder": "081",
            "class": "42"
        },
        {
            "letter": "ல",
            "folder": "087",
            "class": "43"
        },
        {
            "letter": "வ",
            "folder": "105",
            "class": "44"
        },
        {
            "letter": "ழ",
            "folder": "111",
            "class": "45"
        },
        {
            "letter": "ள",
            "folder": "093",
            "class": "46"
        },
        {
            "letter": "ற",
            "folder": "099",
            "class": "47"
        },
        {
            "letter": "ன",
            "folder": "117",
            "class": "48"
        },
        {
            "letter": "கி",
            "folder": "016",
            "class": "49"
        },
        {
            "letter": "ஙி",
            "folder": "028",
            "class": "50"
        },
        {
            "letter": "சி",
            "folder": "022",
            "class": "51"
        },
        {
            "letter": "ஞி",
            "folder": "034",
            "class": "52"
        },
        {
            "letter": "டி",
            "folder": "040",
            "class": "53"
        },
        {
            "letter": "ணி",
            "folder": "046",
            "class": "54"
        },
        {
            "letter": "தி",
            "folder": "052",
            "class": "55"
        },
        {
            "letter": "நி",
            "folder": "058",
            "class": "56"
        },
        {
            "letter": "பி",
            "folder": "064",
            "class": "57"
        },
        {
            "letter": "மி",
            "folder": "070",
            "class": "58"
        },
        {
            "letter": "யி",
            "folder": "076",
            "class": "59"
        },
        {
            "letter": "ரி",
            "folder": "082",
            "class": "60"
        },
        {
            "letter": "லி",
            "folder": "088",
            "class": "61"
        },
        {
            "letter": "வி",
            "folder": "106",
            "class": "62"
        },
        {
            "letter": "ழி",
            "folder": "112",
            "class": "63"
        },
        {
            "letter": "ளி",
            "folder": "094",
            "class": "64"
        },
        {
            "letter": "றி",
            "folder": "100",
            "class": "65"
        },
        {
            "letter": "னி",
            "folder": "118",
            "class": "66"
        },
        {
            "letter": "கீ",
            "folder": "017",
            "class": "67"
        },
        {
            "letter": "ஙீ",
            "folder": "029",
            "class": "68"
        },
        {
            "letter": "சீ",
            "folder": "023",
            "class": "69"
        },
        {
            "letter": "ஞீ",
            "folder": "035",
            "class": "70"
        },
        {
            "letter": "டீ",
            "folder": "041",
            "class": "71"
        },
        {
            "letter": "ணீ",
            "folder": "047",
            "class": "72"
        },
        {
            "letter": "தீ",
            "folder": "053",
            "class": "73"
        },
        {
            "letter": "நீ",
            "folder": "059",
            "class": "74"
        },
        {
            "letter": "பீ",
            "folder": "065",
            "class": "75"
        },
        {
            "letter": "மீ",
            "folder": "071",
            "class": "76"
        },
        {
            "letter": "யீ",
            "folder": "077",
            "class": "77"
        },
        {
            "letter": "ரீ ",
            "folder": "083",
            "class": "78"
        },
        {
            "letter": "லீ",
            "folder": "089",
            "class": "79"
        },
        {
            "letter": "வீ",
            "folder": "107",
            "class": "80"
        },
        {
            "letter": "ழீ",
            "folder": "113",
            "class": "81"
        },
        {
            "letter": "ளீ",
            "folder": "095",
            "class": "82"
        },
        {
            "letter": "றீ ",
            "folder": "101",
            "class": "83"
        },
        {
            "letter": "னீ",
            "folder": "119",
            "class": "84"
        },
        {
            "letter": "கு",
            "folder": "018",
            "class": "85"
        },
        {
            "letter": "ஙு",
            "folder": "030",
            "class": "86"
        },
        {
            "letter": "சு",
            "folder": "024",
            "class": "87"
        },
        {
            "letter": "ஞு",
            "folder": "036",
            "class": "88"
        },
        {
            "letter": "டு",
            "folder": "042",
            "class": "89"
        },
        {
            "letter": "ணு",
            "folder": "048",
            "class": "90"
        },
        {
            "letter": "து",
            "folder": "054",
            "class": "91"
        },
        {
            "letter": "நு",
            "folder": "060",
            "class": "92"
        },
        {
            "letter": "பு",
            "folder": "066",
            "class": "93"
        },
        {
            "letter": "மு",
            "folder": "072",
            "class": "94"
        },
        {
            "letter": "யு",
            "folder": "078",
            "class": "95"
        },
        {
            "letter": "ரு",
            "folder": "084",
            "class": "96"
        },
        {
            "letter": "லு",
            "folder": "090",
            "class": "97"
        },
        {
            "letter": "வு",
            "folder": "108",
            "class": "98"
        },
        {
            "letter": "ழு",
            "folder": "114",
            "class": "99"
        },
        {
            "letter": "ளு",
            "folder": "096",
            "class": "100"
        },
        {
            "letter": "று",
            "folder": "102",
            "class": "101"
        },
        {
            "letter": "னு",
            "folder": "120",
            "class": "102"
        },
        {
            "letter": "கூ",
            "folder": "019",
            "class": "103"
        },
        {
            "letter": "ஙூ",
            "folder": "031",
            "class": "104"
        },
        {
            "letter": "சூ",
            "folder": "025",
            "class": "105"
        },
        {
            "letter": "ஞூ",
            "folder": "037",
            "class": "106"
        },
        {
            "letter": "டூ",
            "folder": "043",
            "class": "107"
        },
        {
            "letter": "ணூ",
            "folder": "049",
            "class": "108"
        },
        {
            "letter": "தூ",
            "folder": "055",
            "class": "109"
        },
        {
            "letter": "நூ",
            "folder": "061",
            "class": "110"
        },
        {
            "letter": "பூ",
            "folder": "067",
            "class": "111"
        },
        {
            "letter": "மூ",
            "folder": "073",
            "class": "112"
        },
        {
            "letter": "யூ",
            "folder": "079",
            "class": "113"
        },
        {
            "letter": "ரூ",
            "folder": "085",
            "class": "114"
        },
        {
            "letter": "லூ",
            "folder": "091",
            "class": "115"
        },
        {
            "letter": "வூ",
            "folder": "109",
            "class": "116"
        },
        {
            "letter": "ழூ",
            "folder": "115",
            "class": "117"
        },
        {
            "letter": "ளூ",
            "folder": "097",
            "class": "118"
        },
        {
            "letter": "றூ",
            "folder": "103",
            "class": "119"
        },
        {
            "letter": "னூ",
            "folder": "145",
            "class": "120"
        },
        {
            "letter": "கா",
            "folder": "156",
            "class": "121"
        },
        {
            "letter": "ஙா",
            "folder": "157",
            "class": "122"
        },
        {
            "letter": "சா",
            "folder": "158",
            "class": "123"
        },
        {
            "letter": "ஞா",
            "folder": "159",
            "class": "124"
        },
        {
            "letter": "டா",
            "folder": "160",
            "class": "125"
        },
        {
            "letter": "ணா",
            "folder": "161",
            "class": "126"
        },
        {
            "letter": "தா",
            "folder": "162",
            "class": "127"
        },
        {
            "letter": "நா",
            "folder": "163",
            "class": "128"
        },
        {
            "letter": "பா",
            "folder": "164",
            "class": "129"
        },
        {
            "letter": "மா",
            "folder": "165",
            "class": "130"
        },
        {
            "letter": "யா",
            "folder": "166",
            "class": "131"
        },
        {
            "letter": "ரா",
            "folder": "167",
            "class": "132"
        },
        {
            "letter": "லா",
            "folder": "168",
            "class": "133"
        },
        {
            "letter": "வா",
            "folder": "169",
            "class": "134"
        },
        {
            "letter": "ழா",
            "folder": "170",
            "class": "135"
        },
        {
            "letter": "ளா",
            "folder": "171",
            "class": "136"
        },
        {
            "letter": "றா",
            "folder": "172",
            "class": "137"
        },
        {
            "letter": "னா",
            "folder": "173",
            "class": "138"
        },
        {
            "letter": "கெ",
            "folder": "174",
            "class": "139"
        },
        {
            "letter": "ஙெ",
            "folder": "175",
            "class": "140"
        },
        {
            "letter": "செ",
            "folder": "176",
            "class": "141"
        },
        {
            "letter": "ஞெ",
            "folder": "177",
            "class": "142"
        },
        {
            "letter": "டெ",
            "folder": "178",
            "class": "143"
        },
        {
            "letter": "ணெ",
            "folder": "179",
            "class": "144"
        },
        {
            "letter": "தெ",
            "folder": "180",
            "class": "145"
        },
        {
            "letter": "நெ",
            "folder": "181",
            "class": "146"
        },
        {
            "letter": "பெ",
            "folder": "182",
            "class": "147"
        },
        {
            "letter": "மெ",
            "folder": "183",
            "class": "148"
        },
        {
            "letter": "யெ",
            "folder": "184",
            "class": "149"
        },
        {
            "letter": "ரெ",
            "folder": "185",
            "class": "150"
        },
        {
            "letter": "லெ",
            "folder": "186",
            "class": "151"
        },
        {
            "letter": "வெ",
            "folder": "187",
            "class": "152"
        },
        {
            "letter": "ழெ",
            "folder": "188",
            "class": "153"
        },
        {
            "letter": "ளெ",
            "folder": "189",
            "class": "154"
        },
        {
            "letter": "றெ",
            "folder": "190",
            "class": "155"
        },
        {
            "letter": "னெ",
            "folder": "191",
            "class": "156"
        },
        {
            "letter": "கே",
            "folder": "192",
            "class": "157"
        },
        {
            "letter": "ஙே",
            "folder": "193",
            "class": "158"
        },
        {
            "letter": "சே",
            "folder": "194",
            "class": "159"
        },
        {
            "letter": "ஞே",
            "folder": "195",
            "class": "160"
        },
        {
            "letter": "டே",
            "folder": "196",
            "class": "161"
        },
        {
            "letter": "ணே",
            "folder": "197",
            "class": "162"
        },
        {
            "letter": "தே",
            "folder": "198",
            "class": "163"
        },
        {
            "letter": "நே",
            "folder": "199",
            "class": "164"
        },
        {
            "letter": "பே",
            "folder": "200",
            "class": "165"
        },
        {
            "letter": "மே",
            "folder": "201",
            "class": "166"
        },
        {
            "letter": "யே",
            "folder": "202",
            "class": "167"
        },
        {
            "letter": "ரே",
            "folder": "203",
            "class": "168"
        },
        {
            "letter": "லே",
            "folder": "204",
            "class": "169"
        },
        {
            "letter": "வே",
            "folder": "205",
            "class": "170"
        },
        {
            "letter": "ழே",
            "folder": "206",
            "class": "171"
        },
        {
            "letter": "ளே",
            "folder": "207",
            "class": "172"
        },
        {
            "letter": "றே",
            "folder": "208",
            "class": "173"
        },
        {
            "letter": "னே",
            "folder": "209",
            "class": "174"
        },
        {
            "letter": "கை",
            "folder": "210",
            "class": "175"
        },
        {
            "letter": "ஙை",
            "folder": "211",
            "class": "176"
        },
        {
            "letter": "சை",
            "folder": "212",
            "class": "177"
        },
        {
            "letter": "ஞை",
            "folder": "213",
            "class": "178"
        },
        {
            "letter": "டை",
            "folder": "214",
            "class": "179"
        },
        {
            "letter": "ணை",
            "folder": "215",
            "class": "180"
        },
        {
            "letter": "தை",
            "folder": "216",
            "class": "181"
        },
        {
            "letter": "நை",
            "folder": "217",
            "class": "182"
        },
        {
            "letter": "பை",
            "folder": "218",
            "class": "183"
        },
        {
            "letter": "மை",
            "folder": "219",
            "class": "184"
        },
        {
            "letter": "யை",
            "folder": "220",
            "class": "185"
        },
        {
            "letter": "ரை",
            "folder": "221",
            "class": "186"
        },
        {
            "letter": "லை",
            "folder": "222",
            "class": "187"
        },
        {
            "letter": "வை",
            "folder": "223",
            "class": "188"
        },
        {
            "letter": "ழை",
            "folder": "224",
            "class": "189"
        },
        {
            "letter": "ளை",
            "folder": "225",
            "class": "190"
        },
        {
            "letter": "றை",
            "folder": "226",
            "class": "191"
        },
        {
            "letter": "னை",
            "folder": "227",
            "class": "192"
        },
        {
            "letter": "கொ",
            "folder": "228",
            "class": "193"
        },
        {
            "letter": "ஙொ",
            "folder": "229",
            "class": "194"
        },
        {
            "letter": "சொ",
            "folder": "230",
            "class": "195"
        },
        {
            "letter": "ஞொ",
            "folder": "231",
            "class": "196"
        },
        {
            "letter": "டொ",
            "folder": "232",
            "class": "197"
        },
        {
            "letter": "ணொ",
            "folder": "233",
            "class": "198"
        },
        {
            "letter": "தொ",
            "folder": "234",
            "class": "199"
        },
        {
            "letter": "நொ",
            "folder": "235",
            "class": "200"
        },
        {
            "letter": "பொ",
            "folder": "236",
            "class": "201"
        },
        {
            "letter": "மொ",
            "folder": "237",
            "class": "202"
        },
        {
            "letter": "யொ",
            "folder": "238",
            "class": "203"
        },
        {
            "letter": "ரொ",
            "folder": "239",
            "class": "204"
        },
        {
            "letter": "லொ",
            "folder": "240",
            "class": "205"
        },
        {
            "letter": "வொ",
            "folder": "241",
            "class": "206"
        },
        {
            "letter": "ழொ",
            "folder": "242",
            "class": "207"
        },
        {
            "letter": "ளொ",
            "folder": "243",
            "class": "208"
        },
        {
            "letter": "றொ",
            "folder": "244",
            "class": "209"
        },
        {
            "letter": "னொ",
            "folder": "245",
            "class": "210"
        },
        {
            "letter": "கோ",
            "folder": "246",
            "class": "211"
        },
        {
            "letter": "ஙோ",
            "folder": "247",
            "class": "212"
        },
        {
            "letter": "சோ",
            "folder": "248",
            "class": "213"
        },
        {
            "letter": "ஞோ",
            "folder": "249",
            "class": "214"
        },
        {
            "letter": "டோ",
            "folder": "250",
            "class": "215"
        },
        {
            "letter": "ணோ",
            "folder": "251",
            "class": "216"
        },
        {
            "letter": "தோ",
            "folder": "252",
            "class": "217"
        },
        {
            "letter": "நோ",
            "folder": "253",
            "class": "218"
        },
        {
            "letter": "போ",
            "folder": "254",
            "class": "219"
        },
        {
            "letter": "மோ",
            "folder": "255",
            "class": "220"
        },
        {
            "letter": "யோ",
            "folder": "256",
            "class": "221"
        },
        {
            "letter": "ரோ",
            "folder": "257",
            "class": "222"
        },
        {
            "letter": "லோ",
            "folder": "258",
            "class": "223"
        },
        {
            "letter": "வோ",
            "folder": "259",
            "class": "224"
        },
        {
            "letter": "ழோ",
            "folder": "260",
            "class": "225"
        },
        {
            "letter": "ளோ",
            "folder": "261",
            "class": "226"
        },
        {
            "letter": "றோ",
            "folder": "262",
            "class": "227"
        },
        {
            "letter": "னோ",
            "folder": "263",
            "class": "228"
        },
        {
            "letter": "கௌ",
            "folder": "264",
            "class": "229"
        },
        {
            "letter": "ஙௌ",
            "folder": "265",
            "class": "230"
        },
        {
            "letter": "சௌ",
            "folder": "266",
            "class": "231"
        },
        {
            "letter": "ஞௌ",
            "folder": "267",
            "class": "232"
        },
        {
            "letter": "டௌ",
            "folder": "268",
            "class": "233"
        },
        {
            "letter": "ணௌ",
            "folder": "269",
            "class": "234"
        },
        {
            "letter": "தௌ",
            "folder": "270",
            "class": "235"
        },
        {
            "letter": "நௌ",
            "folder": "271",
            "class": "236"
        },
        {
            "letter": "பௌ",
            "folder": "272",
            "class": "237"
        },
        {
            "letter": "மௌ",
            "folder": "273",
            "class": "238"
        },
        {
            "letter": "யௌ",
            "folder": "274",
            "class": "239"
        },
        {
            "letter": "ரௌ",
            "folder": "275",
            "class": "240"
        },
        {
            "letter": "லௌ",
            "folder": "276",
            "class": "241"
        },
        {
            "letter": "வௌ",
            "folder": "277",
            "class": "242"
        },
        {
            "letter": "ழௌ",
            "folder": "278",
            "class": "243"
        },
        {
            "letter": "ளௌ",
            "folder": "279",
            "class": "244"
        },
        {
            "letter": "றௌ",
            "folder": "280",
            "class": "245"
        },
        {
            "letter": "னௌ",
            "folder": "281",
            "class": "246"
        }
    ]
}