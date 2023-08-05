const COUNTRIES = [
  {
    name: 'All countries',
    code: 'WW',
    id: 1,
  },
  {
    name: 'Afghanistan',
    code: 'AF',
    id: 0,
  },
  {
    name: 'Åland Islands',
    code: 'AX',
    id: 2,
  },
  {
    name: 'Albania',
    code: 'AL',
    id: 3,
  },
  {
    name: 'Algeria',
    code: 'DZ',
    id: 4,
  },
  {
    name: 'American Samoa',
    code: 'AS',
    id: 5,
  },
  {
    name: 'AndorrA',
    code: 'AD',
    id: 6,
  },
  {
    name: 'Angola',
    code: 'AO',
    id: 7,
  },
  {
    name: 'Anguilla',
    code: 'AI',
    id: 8,
  },
  {
    name: 'Antarctica',
    code: 'AQ',
    id: 9,
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
    id: 10,
  },
  {
    name: 'Argentina',
    code: 'AR',
    id: 11,
  },
  {
    name: 'Armenia',
    code: 'AM',
    id: 12,
  },
  {
    name: 'Aruba',
    code: 'AW',
    id: 13,
  },
  {
    name: 'Australia',
    code: 'AU',
    id: 14,
  },
  {
    name: 'Austria',
    code: 'AT',
    id: 15,
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    id: 16,
  },
  {
    name: 'Bahamas',
    code: 'BS',
    id: 17,
  },
  {
    name: 'Bahrain',
    code: 'BH',
    id: 18,
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    id: 19,
  },
  {
    name: 'Barbados',
    code: 'BB',
    id: 20,
  },
  {
    name: 'Belarus',
    code: 'BY',
    id: 21,
  },
  {
    name: 'Belgium',
    code: 'BE',
    id: 22,
  },
  {
    name: 'Belize',
    code: 'BZ',
    id: 23,
  },
  {
    name: 'Benin',
    code: 'BJ',
    id: 24,
  },
  {
    name: 'Bermuda',
    code: 'BM',
    id: 25,
  },
  {
    name: 'Bhutan',
    code: 'BT',
    id: 26,
  },
  {
    name: 'Bolivia',
    code: 'BO',
    id: 27,
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    id: 28,
  },
  {
    name: 'Botswana',
    code: 'BW',
    id: 29,
  },
  {
    name: 'Bouvet Island',
    code: 'BV',
    id: 30,
  },
  {
    name: 'Brazil',
    code: 'BR',
    id: 31,
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
    id: 32,
  },
  {
    name: 'Brunei Darussalam',
    code: 'BN',
    id: 33,
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    id: 34,
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    id: 35,
  },
  {
    name: 'Burundi',
    code: 'BI',
    id: 36,
  },
  {
    name: 'Cambodia',
    code: 'KH',
    id: 37,
  },
  {
    name: 'Cameroon',
    code: 'CM',
    id: 38,
  },
  {
    name: 'Canada',
    code: 'CA',
    id: 39,
  },
  {
    name: 'Cape Verde',
    code: 'CV',
    id: 40,
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
    id: 41,
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    id: 42,
  },
  {
    name: 'Chad',
    code: 'TD',
    id: 43,
  },
  {
    name: 'Chile',
    code: 'CL',
    id: 44,
  },
  {
    name: 'China',
    code: 'CN',
    id: 45,
  },
  {
    name: 'Christmas Island',
    code: 'CX',
    id: 46,
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'CC',
    id: 47,
  },
  {
    name: 'Colombia',
    code: 'CO',
    id: 48,
  },
  {
    name: 'Comoros',
    code: 'KM',
    id: 49,
  },
  {
    name: 'Congo',
    code: 'CG',
    id: 50,
  },
  {
    name: 'Congo, The Democratic Republic of the',
    code: 'CD',
    id: 51,
  },
  {
    name: 'Cook Islands',
    code: 'CK',
    id: 52,
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    id: 53,
  },
  {
    name: "Cote D'Ivoire",
    code: 'CI',
    id: 54,
  },
  {
    name: 'Croatia',
    code: 'HR',
    id: 55,
  },
  {
    name: 'Cuba',
    code: 'CU',
    id: 56,
  },
  {
    name: 'Cyprus',
    code: 'CY',
    id: 57,
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    id: 58,
  },
  {
    name: 'Denmark',
    code: 'DK',
    id: 59,
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    id: 60,
  },
  {
    name: 'Dominica',
    code: 'DM',
    id: 61,
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    id: 62,
  },
  {
    name: 'Ecuador',
    code: 'EC',
    id: 63,
  },
  {
    name: 'Egypt',
    code: 'EG',
    id: 64,
  },
  {
    name: 'El Salvador',
    code: 'SV',
    id: 65,
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    id: 66,
  },
  {
    name: 'Eritrea',
    code: 'ER',
    id: 67,
  },
  {
    name: 'Estonia',
    code: 'EE',
    id: 68,
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    id: 69,
  },
  {
    name: 'Falkland Islands (Malvinas)',
    code: 'FK',
    id: 70,
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
    id: 71,
  },
  {
    name: 'Fiji',
    code: 'FJ',
    id: 72,
  },
  {
    name: 'Finland',
    code: 'FI',
    id: 73,
  },
  {
    name: 'France',
    code: 'FR',
    id: 74,
  },
  {
    name: 'French Guiana',
    code: 'GF',
    id: 75,
  },
  {
    name: 'French Polynesia',
    code: 'PF',
    id: 76,
  },
  {
    name: 'French Southern Territories',
    code: 'TF',
    id: 77,
  },
  {
    name: 'Gabon',
    code: 'GA',
    id: 78,
  },
  {
    name: 'Gambia',
    code: 'GM',
    id: 79,
  },
  {
    name: 'Georgia',
    code: 'GE',
    id: 80,
  },
  {
    name: 'Germany',
    code: 'DE',
    id: 81,
  },
  {
    name: 'Ghana',
    code: 'GH',
    id: 82,
  },
  {
    name: 'Gibraltar',
    code: 'GI',
    id: 83,
  },
  {
    name: 'Greece',
    code: 'GR',
    id: 84,
  },
  {
    name: 'Greenland',
    code: 'GL',
    id: 85,
  },
  {
    name: 'Grenada',
    code: 'GD',
    id: 86,
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
    id: 87,
  },
  {
    name: 'Guam',
    code: 'GU',
    id: 88,
  },
  {
    name: 'Guatemala',
    code: 'GT',
    id: 89,
  },
  {
    name: 'Guernsey',
    code: 'GG',
    id: 90,
  },
  {
    name: 'Guinea',
    code: 'GN',
    id: 91,
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    id: 92,
  },
  {
    name: 'Guyana',
    code: 'GY',
    id: 93,
  },
  {
    name: 'Haiti',
    code: 'HT',
    id: 94,
  },
  {
    name: 'Heard Island and Mcdonald Islands',
    code: 'HM',
    id: 95,
  },
  {
    name: 'Holy See (Vatican City State)',
    code: 'VA',
    id: 96,
  },
  {
    name: 'Honduras',
    code: 'HN',
    id: 97,
  },
  {
    name: 'Hong Kong',
    code: 'HK',
    id: 98,
  },
  {
    name: 'Hungary',
    code: 'HU',
    id: 99,
  },
  {
    name: 'Iceland',
    code: 'IS',
    id: 100,
  },
  {
    name: 'India',
    code: 'IN',
    id: 101,
  },
  {
    name: 'Indonesia',
    code: 'ID',
    id: 102,
  },
  {
    name: 'Iran, Islamic Republic Of',
    code: 'IR',
    id: 103,
  },
  {
    name: 'Iraq',
    code: 'IQ',
    id: 104,
  },
  {
    name: 'Ireland',
    code: 'IE',
    id: 105,
  },
  {
    name: 'Isle of Man',
    code: 'IM',
    id: 106,
  },
  {
    name: 'Israel',
    code: 'IL',
    id: 107,
  },
  {
    name: 'Italy',
    code: 'IT',
    id: 108,
  },
  {
    name: 'Jamaica',
    code: 'JM',
    id: 109,
  },
  {
    name: 'Japan',
    code: 'JP',
    id: 110,
  },
  {
    name: 'Jersey',
    code: 'JE',
    id: 111,
  },
  {
    name: 'Jordan',
    code: 'JO',
    id: 112,
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    id: 113,
  },
  {
    name: 'Kenya',
    code: 'KE',
    id: 114,
  },
  {
    name: 'Kiribati',
    code: 'KI',
    id: 115,
  },
  {
    name: "Korea, Democratic People'S Republic of",
    code: 'KP',
    id: 116,
  },
  {
    name: 'Korea, Republic of',
    code: 'KR',
    id: 117,
  },
  {
    name: 'Kuwait',
    code: 'KW',
    id: 118,
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    id: 119,
  },
  {
    name: "Lao People'S Democratic Republic",
    code: 'LA',
    id: 120,
  },
  {
    name: 'Latvia',
    code: 'LV',
    id: 121,
  },
  {
    name: 'Lebanon',
    code: 'LB',
    id: 122,
  },
  {
    name: 'Lesotho',
    code: 'LS',
    id: 123,
  },
  {
    name: 'Liberia',
    code: 'LR',
    id: 124,
  },
  {
    name: 'Libyan Arab Jamahiriya',
    code: 'LY',
    id: 125,
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    id: 126,
  },
  {
    name: 'Lithuania',
    code: 'LT',
    id: 127,
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    id: 128,
  },
  {
    name: 'Macao',
    code: 'MO',
    id: 129,
  },
  {
    name: 'Macedonia, The Former Yugoslav Republic of',
    code: 'MK',
    id: 130,
  },
  {
    name: 'Madagascar',
    code: 'MG',
    id: 131,
  },
  {
    name: 'Malawi',
    code: 'MW',
    id: 132,
  },
  {
    name: 'Malaysia',
    code: 'MY',
    id: 133,
  },
  {
    name: 'Maldives',
    code: 'MV',
    id: 134,
  },
  {
    name: 'Mali',
    code: 'ML',
    id: 135,
  },
  {
    name: 'Malta',
    code: 'MT',
    id: 136,
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    id: 137,
  },
  {
    name: 'Martinique',
    code: 'MQ',
    id: 138,
  },
  {
    name: 'Mauritania',
    code: 'MR',
    id: 139,
  },
  {
    name: 'Mauritius',
    code: 'MU',
    id: 140,
  },
  {
    name: 'Mayotte',
    code: 'YT',
    id: 141,
  },
  {
    name: 'Mexico',
    code: 'MX',
    id: 142,
  },
  {
    name: 'Micronesia, Federated States of',
    code: 'FM',
    id: 143,
  },
  {
    name: 'Moldova, Republic of',
    code: 'MD',
    id: 144,
  },
  {
    name: 'Monaco',
    code: 'MC',
    id: 145,
  },
  {
    name: 'Mongolia',
    code: 'MN',
    id: 146,
  },
  {
    name: 'Montserrat',
    code: 'MS',
    id: 147,
  },
  {
    name: 'Morocco',
    code: 'MA',
    id: 148,
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    id: 149,
  },
  {
    name: 'Myanmar',
    code: 'MM',
    id: 150,
  },
  {
    name: 'Namibia',
    code: 'NA',
    id: 151,
  },
  {
    name: 'Nauru',
    code: 'NR',
    id: 152,
  },
  {
    name: 'Nepal',
    code: 'NP',
    id: 153,
  },
  {
    name: 'Netherlands',
    code: 'NL',
    id: 154,
  },
  {
    name: 'Netherlands Antilles',
    code: 'AN',
    id: 155,
  },
  {
    name: 'New Caledonia',
    code: 'NC',
    id: 156,
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    id: 157,
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    id: 158,
  },
  {
    name: 'Niger',
    code: 'NE',
    id: 159,
  },
  {
    name: 'Nigeria',
    code: 'NG',
    id: 160,
  },
  {
    name: 'Niue',
    code: 'NU',
    id: 161,
  },
  {
    name: 'Norfolk Island',
    code: 'NF',
    id: 162,
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    id: 163,
  },
  {
    name: 'Norway',
    code: 'NO',
    id: 164,
  },
  {
    name: 'Oman',
    code: 'OM',
    id: 165,
  },
  {
    name: 'Pakistan',
    code: 'PK',
    id: 166,
  },
  {
    name: 'Palau',
    code: 'PW',
    id: 167,
  },
  {
    name: 'Palestinian Territory, Occupied',
    code: 'PS',
    id: 168,
  },
  {
    name: 'Panama',
    code: 'PA',
    id: 169,
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    id: 170,
  },
  {
    name: 'Paraguay',
    code: 'PY',
    id: 171,
  },
  {
    name: 'Peru',
    code: 'PE',
    id: 172,
  },
  {
    name: 'Philippines',
    code: 'PH',
    id: 173,
  },
  {
    name: 'Pitcairn',
    code: 'PN',
    id: 174,
  },
  {
    name: 'Poland',
    code: 'PL',
    id: 175,
  },
  {
    name: 'Portugal',
    code: 'PT',
    id: 176,
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
    id: 177,
  },
  {
    name: 'Qatar',
    code: 'QA',
    id: 178,
  },
  {
    name: 'Reunion',
    code: 'RE',
    id: 179,
  },
  {
    name: 'Romania',
    code: 'RO',
    id: 180,
  },
  {
    name: 'Russian Federation',
    code: 'RU',
    id: 181,
  },
  {
    name: 'RWANDA',
    code: 'RW',
    id: 182,
  },
  {
    name: 'Saint Helena',
    code: 'SH',
    id: 183,
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
    id: 184,
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
    id: 185,
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
    id: 186,
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    id: 187,
  },
  {
    name: 'Samoa',
    code: 'WS',
    id: 188,
  },
  {
    name: 'San Marino',
    code: 'SM',
    id: 189,
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
    id: 190,
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    id: 191,
  },
  {
    name: 'Senegal',
    code: 'SN',
    id: 192,
  },
  {
    name: 'Serbia and Montenegro',
    code: 'CS',
    id: 193,
  },
  {
    name: 'Seychelles',
    code: 'SC',
    id: 194,
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    id: 195,
  },
  {
    name: 'Singapore',
    code: 'SG',
    id: 196,
  },
  {
    name: 'Slovakia',
    code: 'SK',
    id: 197,
  },
  {
    name: 'Slovenia',
    code: 'SI',
    id: 198,
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    id: 199,
  },
  {
    name: 'Somalia',
    code: 'SO',
    id: 200,
  },
  {
    name: 'South Africa',
    code: 'ZA',
    id: 201,
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS',
    id: 202,
  },
  {
    name: 'Spain',
    code: 'ES',
    id: 203,
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    id: 204,
  },
  {
    name: 'Sudan',
    code: 'SD',
    id: 205,
  },
  {
    name: 'Suriname',
    code: 'SR',
    id: 206,
  },
  {
    name: 'Svalbard and Jan Mayen',
    code: 'SJ',
    id: 207,
  },
  {
    name: 'Swaziland',
    code: 'SZ',
    id: 208,
  },
  {
    name: 'Sweden',
    code: 'SE',
    id: 209,
  },
  {
    name: 'Switzerland',
    code: 'CH',
    id: 210,
  },
  {
    name: 'Syrian Arab Republic',
    code: 'SY',
    id: 211,
  },
  {
    name: 'Taiwan, Province of China',
    code: 'TW',
    id: 212,
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    id: 213,
  },
  {
    name: 'Tanzania, United Republic of',
    code: 'TZ',
    id: 214,
  },
  {
    name: 'Thailand',
    code: 'TH',
    id: 215,
  },
  {
    name: 'Timor-Leste',
    code: 'TL',
    id: 216,
  },
  {
    name: 'Togo',
    code: 'TG',
    id: 217,
  },
  {
    name: 'Tokelau',
    code: 'TK',
    id: 218,
  },
  {
    name: 'Tonga',
    code: 'TO',
    id: 219,
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
    id: 220,
  },
  {
    name: 'Tunisia',
    code: 'TN',
    id: 221,
  },
  {
    name: 'Turkey',
    code: 'TR',
    id: 222,
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    id: 223,
  },
  {
    name: 'Turks and Caicos Islands',
    code: 'TC',
    id: 224,
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    id: 225,
  },
  {
    name: 'Uganda',
    code: 'UG',
    id: 226,
  },
  {
    name: 'Ukraine',
    code: 'UA',
    id: 227,
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    id: 228,
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    id: 229,
  },
  {
    name: 'United States',
    code: 'US',
    id: 230,
  },
  {
    name: 'United States Minor Outlying Islands',
    code: 'UM',
    id: 231,
  },
  {
    name: 'Uruguay',
    code: 'UY',
    id: 232,
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    id: 233,
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    id: 234,
  },
  {
    name: 'Venezuela',
    code: 'VE',
    id: 235,
  },
  {
    name: 'Viet Nam',
    code: 'VN',
    id: 236,
  },
  {
    name: 'Virgin Islands, British',
    code: 'VG',
    id: 237,
  },
  {
    name: 'Virgin Islands, U.S.',
    code: 'VI',
    id: 238,
  },
  {
    name: 'Wallis and Futuna',
    code: 'WF',
    id: 239,
  },
  {
    name: 'Western Sahara',
    code: 'EH',
    id: 240,
  },
  {
    name: 'Yemen',
    code: 'YE',
    id: 241,
  },
  {
    name: 'Zambia',
    code: 'ZM',
    id: 242,
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    id: 243,
  },
];

export { COUNTRIES };
