var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#97ad9c",
    state_hover_color: "#1C5329",
    state_url: "",
    border_size: "1.5",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#000000",
    location_opacity: "0.8",
    location_hover_opacity: 1,
    location_size: "25",
    location_type: "triangle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    CHAG: {
      name: "Aargau"
    },
    CHAI: {
      name: "Appenzell Innerrhoden"
    },
    CHAR: {
      name: "Appenzell Ausserrhoden"
    },
    CHBE: {
      name: "Bern"
    },
    CHBL: {
      name: "Basel-Landschaft"
    },
    CHBS: {
      name: "Basel-Stadt"
    },
    CHFR: {
      name: "Fribourg"
    },
    CHGE: {
      name: "Genève"
    },
    CHGL: {
      name: "Glarus"
    },
    CHGR: {
      name: "Graubünden"
    },
    CHJU: {
      name: "Jura"
    },
    CHLU: {
      name: "Lucerne"
    },
    CHNE: {
      name: "Neuchâtel"
    },
    CHNW: {
      name: "Nidwalden"
    },
    CHOW: {
      name: "Obwalden"
    },
    CHSG: {
      name: "Sankt Gallen"
    },
    CHSH: {
      name: "Schaffhausen"
    },
    CHSO: {
      name: "Solothurn"
    },
    CHSZ: {
      name: "Schwyz"
    },
    CHTG: {
      name: "Thurgau"
    },
    CHTI: {
      name: "Ticino"
    },
    CHUR: {
      name: "Uri"
    },
    CHVD: {
      name: "Vaud"
    },
    CHVS: {
      name: "Valais"
    },
    CHZG: {
      name: "Zug"
    },
    CHZH: {
      name: "Zürich"
    }
  },
  locations: {
    "0": {
      name: "Geissfluegrat",
      lat: "47.422806",
      lng: "7.964565",
      description: "Kanton Aargau"
    },
    "1": {
      name: "Finsteraarhorn",
      lng: "8.126090",
      lat: "46.537354",
      description: "Kanton Bern"
    },
    "2": {
      name: "Schnebelhorn",
      lng: "8.979639",
      lat: "47.325607",
      description: "Kanton Zürich "
    },
    "3": {
      name: "Brienzer Rothorn",
      lng: "8.046906",
      lat: "46.787106",
      description: "Kanton Luzern"
    },
    "4": {
      name: "Dammastock",
      lng: "8.421094",
      lat: "46.643452 ",
      description: "Kanton Uri"
    },
    "5": {
      name: "Bös Fulen",
      lng: "8.945704",
      lat: "46.967159",
      description: "Kanton Schwyz"
    },
    "6": {
      name: "Titlis",
      lng: "8.437814",
      lat: "46.772034",
      description: "Kanton Obwalden "
    },
    "7": {
      name: "Rotstöckli",
      lng: "8.425766",
      lat: "46.777584",
      description: "Kanton Nidwalden"
    },
    "8": {
      name: "Wildspitz",
      lng: "8.577614",
      lat: "47.084488",
      description: "Kanton Zug"
    },
    "9": {
      name: "Vanil Noir",
      lng: "7.148340",
      lat: "46.528450",
      description: "Kanton Freiburg"
    },
    "10": {
      name: "Hasenmatt",
      lng: "7.450936",
      lat: "47.242168",
      description: "Kanton Solothurn"
    },
    "11": {
      name: "Hinteri Egg",
      lng: "7.710829",
      lat: "47.372555,",
      description: "Kanton Basel-Landschaft"
    },
    "12": {
      name: "St. Chrischona",
      lng: "7.680197",
      lat: "47.573105",
      description: "Kanton Basel-Stadt"
    },
    "13": {
      name: "Hagen",
      lng: "8.567608",
      lat: "47.774918",
      description: "Kanton Schaffhausen"
    },
    "14": {
      name: "Säntis",
      lng: "9.343241",
      lat: "47.249424,",
      description: "Kanton Appenzell"
    },
    "15": {
      name: "Ringelspitz",
      lng: "9.343086",
      lat: "46.898273",
      description: "Kanton Sankt Gallen"
    },
    "16": {
      name: "Piz Bernina",
      lng: "9.908059",
      lat: "46.382355",
      description: "Kanton Graubünden"
    },
    "17": {
      name: "Groot",
      lng: "8.966400",
      lat: "47.385456",
      description: "Kanton Thurgau"
    },
    "18": {
      name: "Rheinwaldhorn",
      lng: "9.040203",
      lat: "46.493748",
      description: "Kanton Tessin"
    },
    "19": {
      name: "Les Diablerets",
      lng: "7.190370",
      lat: "46.304420",
      description: "Kanton Waadt"
    },
    "20": {
      name: "Dufourspitze",
      lng: "7.866757",
      lat: "45.936924",
      description: "Kanton Wallis"
    },
    "21": {
      name: "Chasseral Ouest",
      lng: "7.035315",
      lat: "47.121876",
      description: "Kanton Neuenburg"
    },
    "22": {
      name: "Les Arales",
      lng: "6.309246",
      lat: "46.248672",
      description: "Kanton Genf"
    },
    "23": {
      name: "Mont Raimeux",
      lng: "7.428874",
      lat: "47.307198",
      description: "Kanton Jura"
    },
    "24": {
      name: "Tödi",
      lng: "8.921887",
      lat: "46.810444",
      description: "Kanton Glarus"
    }
  },
  labels: {
    CHAG: {
      name: "Aargau",
      parent_id: "CHAG"
    },
    CHAI: {
      name: "Appenzell Innerrhoden",
      parent_id: "CHAI"
    },
    CHAR: {
      name: "Appenzell Ausserrhoden",
      parent_id: "CHAR"
    },
    CHBE: {
      name: "Bern",
      parent_id: "CHBE"
    },
    CHBL: {
      name: "Basel-Landschaft",
      parent_id: "CHBL"
    },
    CHBS: {
      name: "Basel-Stadt",
      parent_id: "CHBS"
    },
    CHFR: {
      name: "Fribourg",
      parent_id: "CHFR"
    },
    CHGE: {
      name: "Genève",
      parent_id: "CHGE"
    },
    CHGL: {
      name: "Glarus",
      parent_id: "CHGL"
    },
    CHGR: {
      name: "Graubünden",
      parent_id: "CHGR"
    },
    CHJU: {
      name: "Jura",
      parent_id: "CHJU"
    },
    CHLU: {
      name: "Lucerne",
      parent_id: "CHLU"
    },
    CHNE: {
      name: "Neuchâtel",
      parent_id: "CHNE"
    },
    CHNW: {
      name: "Nidwalden",
      parent_id: "CHNW"
    },
    CHOW: {
      name: "Obwalden",
      parent_id: "CHOW"
    },
    CHSG: {
      name: "Sankt Gallen",
      parent_id: "CHSG"
    },
    CHSH: {
      name: "Schaffhausen",
      parent_id: "CHSH"
    },
    CHSO: {
      name: "Solothurn",
      parent_id: "CHSO"
    },
    CHSZ: {
      name: "Schwyz",
      parent_id: "CHSZ"
    },
    CHTG: {
      name: "Thurgau",
      parent_id: "CHTG"
    },
    CHTI: {
      name: "Ticino",
      parent_id: "CHTI"
    },
    CHUR: {
      name: "Uri",
      parent_id: "CHUR"
    },
    CHVD: {
      name: "Vaud",
      parent_id: "CHVD"
    },
    CHVS: {
      name: "Valais",
      parent_id: "CHVS"
    },
    CHZG: {
      name: "Zug",
      parent_id: "CHZG"
    },
    CHZH: {
      name: "Zürich",
      parent_id: "CHZH"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};