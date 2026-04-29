// Hazard objects - spikes and dangerous elements that kill the player
export const hazardData = {
  "8": {
    "type": "hazard",
    "frame": "spike_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "spriteW": 30,
    "spriteH": 30,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "9": {
    "type": "hazard",
    "frame": "pit_01_001.png",
    "gridW": 0,
    "gridH": 0,
    "black": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1004,
    "spriteW": 30,
    "spriteH": 27,
    "hitboxScaleX": 0.3,
    "hitboxScaleY": 0.4,
    "randomFrames": [
      "pit_01_001.png",
      "pit_02_001.png",
      "pit_03_001.png"
    ],
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "39": {
    "type": "hazard",
    "frame": "spike_02_001.png",
    "gridW": 1,
    "gridH": 1,
    "spriteW": 30,
    "spriteH": 14,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "61": {
    "type": "hazard",
    "frame": "pit_04_001.png",
    "gridW": 0,
    "gridH": 0,
    "black": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1004,
    "spriteW": 30,
    "spriteH": 18,
    "hitboxScaleX": 0.3,
    "hitboxScaleY": 0.4,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "88": {
    "type": "hazard",
    "frame": "sawblade_01_001.png",
    "gridW": 1,
    "gridH": 1,
    "hitbox_radius": 32.29999923706055,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "89": {
    "type": "hazard",
    "frame": "sawblade_02_001.png",
    "gridW": 2,
    "gridH": 2,
    "hitbox_radius": 21.600000381469727,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "98": {
    "type": "hazard",
    "frame": "sawblade_03_001.png",
    "gridW": 3,
    "gridH": 3,
    "hitbox_radius": 11.77500057220459,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "103": {
    "type": "hazard",
    "frame": "spike_03_001.png",
    "gridW": 0.5,
    "gridH": 0.5,
    "spriteW": 20,
    "spriteH": 19,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "177": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "iceSpike_01_001.png",
    "glow_frame": "iceSpike_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "178": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "iceSpike_02_001.png",
    "glow_frame": "iceSpike_02_glow_001.png",
    "gridH": 0.5333333611488342,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "179": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "iceSpike_03_001.png",
    "glow_frame": "iceSpike_03_glow_001.png",
    "gridH": 0.6666666865348816,
    "gridW": 0.6666666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "183": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blade_b_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_b_01_001.png",
    "glow_frame": "blade_b_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 15.300000190734863,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "184": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_b_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_b_02_001.png",
    "glow_frame": "blade_b_02_glow_001.png",
    "gridH": 1.7666666507720947,
    "gridW": 2,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 20.399999618530273,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "185": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_b_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_b_03_001.png",
    "glow_frame": "blade_b_03_glow_001.png",
    "gridH": 1.3333333730697632,
    "gridW": 0.3333333432674408,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 2.8500001430511475,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "186": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_01_001.png",
    "glow_frame": "blade_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 32.29999923706055,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "187": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_02_001.png",
    "glow_frame": "blade_02_glow_001.png",
    "gridH": 2.0333333015441895,
    "gridW": 2.0333333015441895,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 21.8700008392334,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "188": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_03_001.png",
    "glow_frame": "blade_03_glow_001.png",
    "gridH": 1.399999976158142,
    "gridW": 1.399999976158142,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 12.600000381469727,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "205": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "invis_spike_02_001.png",
    "glow_frame": "invis_spike_02_glow_001.png",
    "gridH": 0.46666666865348816,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "216": {
    "can_color": true,
    "children": [
      {
        "frame": "colorSpike_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "colorSpike_01_001.png",
    "glow_frame": "colorSpike_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "217": {
    "can_color": true,
    "children": [
      {
        "frame": "colorSpike_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "colorSpike_02_001.png",
    "glow_frame": "colorSpike_02_glow_001.png",
    "gridH": 0.46666666865348816,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "218": {
    "can_color": true,
    "children": [
      {
        "frame": "colorSpike_03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "colorSpike_03_001.png",
    "glow_frame": "colorSpike_03_glow_001.png",
    "gridH": 0.6333333253860474,
    "gridW": 0.6666666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "243": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_04_02_001.png",
    "glow_frame": "pit_04_02_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "244": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_04_03_001.png",
    "glow_frame": "pit_04_03_glow_001.png",
    "gridH": 0.5666666626930237,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "365": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_01_low_001.png",
    "glow_frame": "pit_01_low_glow_001.png",
    "gridH": 0.5,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "368": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_04_low_001.png",
    "glow_frame": "pit_04_low_glow_001.png",
    "gridH": 0.3333333432674408,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "392": {
    "type": "hazard",
    "frame": "spike_04_001.png",
    "gridW": 0.5,
    "gridH": 0.5,
    "spriteW": 13,
    "spriteH": 12,
    "hitboxScaleX": 0.2,
    "hitboxScaleY": 0.4,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "397": {
    "black": true,
    "can_color": true,
    "children": [
      {
        "frame": "darkblade_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 0,
        "z": 1
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 0,
        "z": 1
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 0,
        "z": 1
      }
    ],
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "darkblade_01_001.png",
    "glow_frame": "darkblade_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 28.899999618530273,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "398": {
    "black": true,
    "can_color": true,
    "children": [
      {
        "frame": "darkblade_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "darkblade_02_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "darkblade_02_001.png",
    "glow_frame": "darkblade_02_glow_001.png",
    "gridH": 2.0999999046325684,
    "gridW": 1.8333333730697632,
    "spriteH": 63,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 17.440000534057617,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "399": {
    "black": true,
    "can_color": true,
    "children": [
      {
        "frame": "darkblade_03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "darkblade_03_001.png",
        "localDy": 0,
        "tint": 0,
        "z": -1
      }
    ],
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "darkblade_03_001.png",
    "glow_frame": "darkblade_03_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 12.90000057220459,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "421": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_05_001.png",
    "glow_frame": "pit_05_glow_001.png",
    "gridH": 0.4333333373069763,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "422": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_05_02_001.png",
    "glow_frame": "pit_05_02_glow_001.png",
    "gridH": 0.36666667461395264,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "446": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_06_001.png",
    "glow_frame": "pit_06_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "447": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_06_2_001.png",
    "glow_frame": "pit_06_2_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 0.8666666746139526,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "458": {
    "can_color": true,
    "children": [
      {
        "frame": "colorSpike_04_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "colorSpike_04_001.png",
    "glow_frame": "colorSpike_04_glow_001.png",
    "gridH": 0.4000000059604645,
    "gridW": 0.4333333373069763,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "459": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "invis_spike_04_001.png",
    "glow_frame": "invis_spike_04_glow_001.png",
    "gridH": 0.4000000059604645,
    "gridW": 0.4333333373069763,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "667": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_07_001.png",
    "glow_frame": "pit_07_glow_001.png",
    "gridH": 0.5,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "678": {
    "can_color": true,
    "children": [
      {
        "frame": "lightBlade_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "lightBlade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "lightBlade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "lightBlade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "lightBlade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "lightBlade_01_001.png",
    "glow_frame": "lightBlade_01_glow_001.png",
    "gridH": 1.3666666746139526,
    "gridW": 1.3333333730697632,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "hitbox_radius": 30.399999618530273,
    "default_z_layer": 5,
    "default_z_order": 0
  },
  "679": {
    "can_color": true,
    "children": [
      {
        "frame": "lightBlade_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "lightBlade_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "lightBlade_02_001.png",
    "glow_frame": "lightBlade_02_glow_001.png",
    "gridH": 1.7999999523162842,
    "gridW": 1.7333333492279053,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "hitbox_radius": 18.540000915527344,
    "default_z_layer": 5,
    "default_z_order": 0
  },
  "680": {
    "can_color": true,
    "children": [
      {
        "frame": "lightBlade_03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "lightBlade_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "lightBlade_03_001.png",
    "glow_frame": "lightBlade_03_glow_001.png",
    "gridH": 1.2000000476837158,
    "gridW": 1.2000000476837158,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "hitbox_radius": 10.800000190734863,
    "default_z_layer": 5,
    "default_z_order": 0
  },
  "720": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_07_2_001.png",
    "glow_frame": "pit_07_2_glow_001.png",
    "gridH": 0.2666666805744171,
    "gridW": 0.2666666805744171,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "740": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_01_001.png",
    "glow_frame": "blade_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 32.29999923706055,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "741": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_02_001.png",
    "glow_frame": "blade_02_glow_001.png",
    "gridH": 2.0333333015441895,
    "gridW": 2.0333333015441895,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 21.8700008392334,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "742": {
    "can_color": true,
    "children": [
      {
        "frame": "blade_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "frame": "blade_03_001.png",
    "glow_frame": "blade_03_glow_001.png",
    "gridH": 1.399999976158142,
    "gridW": 1.399999976158142,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 12.600000381469727,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "768": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_05_03_001.png",
    "glow_frame": "pit_05_03_glow_001.png",
    "gridH": 0.4333333373069763,
    "gridW": 0.5,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "919": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": null,
    "glow_frame": "none",
    "gridH": 0.20000000298023224,
    "gridW": 0.8333333134651184,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "989": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_07_3_001.png",
    "glow_frame": "pit_07_3_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "991": {
    "black": true,
    "can_color": true,
    "color_channel": "black",
    "default_base_color_channel": 1004,
    "frame": "pit_07_4_001.png",
    "glow_frame": "pit_07_4_glow_001.png",
    "gridH": 0.2666666805744171,
    "gridW": 0.2666666805744171,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1582": {
    "can_color": true,
    "children": [
      {
        "frame": "fireball_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "fireball_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": 100
      }
    ],
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1012,
    "frame": "fireball_01_001.png",
    "glow_frame": "fireball_01_glow_001.png",
    "gridH": 0.8666666746139526,
    "gridW": 0.8999999761581421,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 9,
    "hitbox_radius": 4,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "1583": {
    "can_color": true,
    "children": [
      {
        "frame": "fireball_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": 100
      }
    ],
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1012,
    "frame": "fireball_02_001.png",
    "glow_frame": "fireball_02_glow_001.png",
    "gridH": 0.7666666507720947,
    "gridW": 1.0333333015441895,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 9,
    "hitbox_radius": 4,
    "default_z_layer": 3,
    "default_z_order": 9
  },
  "1619": {
    "can_color": true,
    "children": [
      {
        "frame": "spinBlade01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "spinBlade01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "spinBlade01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 2
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "spinBlade01_001.png",
    "glow_frame": "spinBlade01_glow_001.png",
    "gridH": 1.2999999523162842,
    "gridW": 1.6333333253860474,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 25,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1620": {
    "can_color": true,
    "children": [
      {
        "frame": "spinBlade02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "spinBlade02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "spinBlade02_001.png",
    "glow_frame": "spinBlade02_glow_001.png",
    "gridH": 1.0666667222976685,
    "gridW": 1.0666667222976685,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 15,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1701": {
    "can_color": true,
    "children": [
      {
        "frame": "bladeTrap01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "bladeTrap01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 2
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "bladeTrap01_001.png",
    "glow_frame": "bladeTrap01_glow_001.png",
    "gridH": 0.9333333373069763,
    "gridW": 0.6666666865348816,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 6,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1702": {
    "can_color": true,
    "children": [
      {
        "frame": "bladeTrap02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "bladeTrap02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 2
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "bladeTrap02_001.png",
    "glow_frame": "bladeTrap02_glow_001.png",
    "gridH": 0.9666666388511658,
    "gridW": 0.5,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 6,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1703": {
    "can_color": true,
    "children": [
      {
        "frame": "bladeTrap03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "bladeTrap03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 2
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1,
    "frame": "bladeTrap03_001.png",
    "glow_frame": "bladeTrap03_glow_001.png",
    "gridH": 0.7333333492279053,
    "gridW": 0.4333333373069763,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 6,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1705": {
    "can_color": true,
    "children": [
      {
        "frame": "sawblade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "sawblade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1010,
    "frame": "sawblade_01_001.png",
    "glow_frame": "sawblade_01_glow_001.png",
    "gridH": 2.8333332538604736,
    "gridW": 1.4666666984558105,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 32.29999923706055,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1706": {
    "can_color": true,
    "children": [
      {
        "frame": "sawblade_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1010,
    "frame": "sawblade_02_001.png",
    "glow_frame": "sawblade_02_glow_001.png",
    "gridH": 2,
    "gridW": 2,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 21.600000381469727,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1707": {
    "can_color": true,
    "children": [
      {
        "frame": "sawblade_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1010,
    "frame": "sawblade_03_001.png",
    "glow_frame": "sawblade_03_glow_001.png",
    "gridH": 1.3333333730697632,
    "gridW": 1.3333333730697632,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 11.77500057220459,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1708": {
    "can_color": true,
    "children": [
      {
        "frame": "darkblade_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "darkblade_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1010,
    "default_detail_color_channel": 1,
    "frame": "darkblade_01_001.png",
    "glow_frame": "darkblade_01_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 28.899999618530273,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1709": {
    "can_color": true,
    "children": [
      {
        "frame": "darkblade_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "darkblade_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1010,
    "default_detail_color_channel": 1,
    "frame": "darkblade_02_001.png",
    "glow_frame": "darkblade_02_glow_001.png",
    "gridH": 2.0999999046325684,
    "gridW": 1.8333333730697632,
    "spriteH": 63,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 17.440000534057617,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1710": {
    "can_color": true,
    "children": [
      {
        "frame": "darkblade_03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "darkblade_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1010,
    "default_detail_color_channel": 1,
    "frame": "darkblade_03_001.png",
    "glow_frame": "darkblade_03_glow_001.png",
    "gridH": 1.4333332777023315,
    "gridW": 1.4333332777023315,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 12.90000057220459,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1711": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "pit_b_01_001.png",
    "glow_frame": "pit_b_01_glow_001.png",
    "gridH": 1.6666666269302368,
    "gridW": 1.5666667222976685,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1712": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "pit_b_02_001.png",
    "glow_frame": "pit_b_02_glow_001.png",
    "gridH": 1.8666666746139526,
    "gridW": 1.5,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1713": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "pit_b_03_001.png",
    "glow_frame": "pit_b_03_glow_001.png",
    "gridH": 1.6666666269302368,
    "gridW": 1.2999999523162842,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1714": {
    "can_color": true,
    "default_base_color_channel": 1004,
    "frame": "pit_b_04_001.png",
    "glow_frame": "pit_b_04_glow_001.png",
    "gridH": 1.3666666746139526,
    "gridW": 1.2666666507720947,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1715": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_03_001.png",
    "glow_frame": "pit_03_glow_001.png",
    "gridH": 0.8999999761581421,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1716": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_01_low_001.png",
    "glow_frame": "pit_01_low_glow_001.png",
    "gridH": 0.5,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1719": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_04_001.png",
    "glow_frame": "pit_04_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1720": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_04_02_001.png",
    "glow_frame": "pit_04_02_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1721": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_04_03_001.png",
    "glow_frame": "pit_04_03_glow_001.png",
    "gridH": 0.5666666626930237,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 2,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 2
  },
  "1722": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_04_low_001.png",
    "glow_frame": "pit_04_low_glow_001.png",
    "gridH": 0.3333333432674408,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1725": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_05_001.png",
    "glow_frame": "pit_05_glow_001.png",
    "gridH": 0.4333333373069763,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1726": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_05_02_001.png",
    "glow_frame": "pit_05_02_glow_001.png",
    "gridH": 0.36666667461395264,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1727": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_05_03_001.png",
    "glow_frame": "pit_05_03_glow_001.png",
    "gridH": 0.4333333373069763,
    "gridW": 0.5,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1728": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_06_001.png",
    "glow_frame": "pit_06_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1729": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_06_2_001.png",
    "glow_frame": "pit_06_2_glow_001.png",
    "gridH": 0.6000000238418579,
    "gridW": 0.8666666746139526,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1730": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_07_001.png",
    "glow_frame": "pit_07_glow_001.png",
    "gridH": 0.5,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1731": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_07_2_001.png",
    "glow_frame": "pit_07_2_glow_001.png",
    "gridH": 0.2666666805744171,
    "gridW": 0.2666666805744171,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1732": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_07_3_001.png",
    "glow_frame": "pit_07_3_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1733": {
    "can_color": true,
    "default_base_color_channel": 1010,
    "frame": "pit_07_4_001.png",
    "glow_frame": "pit_07_4_glow_001.png",
    "gridH": 0.2666666805744171,
    "gridW": 0.2666666805744171,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "default_detail_color_channel": -1,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1734": {
    "can_color": true,
    "children": [
      {
        "frame": "blackCogwheel_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "blackCogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      },
      {
        "frame": "blackCogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blackCogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      },
      {
        "frame": "blackCogwheel_01_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": 1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1010,
    "frame": "blackCogwheel_01_001.png",
    "glow_frame": "blackCogwheel_01_glow_001.png",
    "gridH": 1.3666666746139526,
    "gridW": 1.3666666746139526,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 32,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1735": {
    "can_color": true,
    "children": [
      {
        "frame": "blackCogwheel_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "blackCogwheel_02_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1010,
    "frame": "blackCogwheel_02_001.png",
    "glow_frame": "blackCogwheel_02_glow_001.png",
    "gridH": 1.7666666507720947,
    "gridW": 1.7333333492279053,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 17.510000228881836,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "1736": {
    "can_color": true,
    "children": [
      {
        "frame": "blackCogwheel_03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      },
      {
        "frame": "blackCogwheel_03_001.png",
        "localDy": 0,
        "tint": 65280,
        "z": -1
      }
    ],
    "default_base_color_channel": 1004,
    "default_detail_color_channel": 1010,
    "frame": "blackCogwheel_03_001.png",
    "glow_frame": "blackCogwheel_03_glow_001.png",
    "gridH": 1.2999999523162842,
    "gridW": 1.2999999523162842,
    "spritesheet": "GJ_GameSheet-uhd",
    "type": "hazard",
    "z": 1,
    "hitbox_radius": 12.479999542236328,
    "default_z_layer": 5,
    "default_z_order": 1
  },
  "3034": {
    "can_color": true,
    "children": [
      {
        "frame": "gdh_spike_01_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1,
    "frame": "gdh_spike_01_001.png",
    "glow_frame": "gdh_spike_01_glow_001.png",
    "gridH": 1,
    "gridW": 1,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "hazard",
    "z": 5,
    "default_z_layer": 1,
    "default_z_order": 5
  },
  "3035": {
    "can_color": true,
    "children": [
      {
        "frame": "gdh_spike_02_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1,
    "frame": "gdh_spike_02_001.png",
    "glow_frame": "gdh_spike_02_glow_001.png",
    "gridH": 0.6666666865348816,
    "gridW": 0.6666666865348816,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "hazard",
    "z": 5,
    "default_z_layer": 1,
    "default_z_order": 5
  },
  "3036": {
    "can_color": true,
    "children": [
      {
        "frame": "gdh_spike_03_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1,
    "frame": "gdh_spike_03_001.png",
    "glow_frame": "gdh_spike_03_glow_001.png",
    "gridH": 0.5,
    "gridW": 0.5,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "hazard",
    "z": 5,
    "default_z_layer": 1,
    "default_z_order": 5
  },
  "3037": {
    "can_color": true,
    "children": [
      {
        "frame": "gdh_spike_04_color_001.png",
        "localDy": 0,
        "tint": 52224,
        "z": -100
      }
    ],
    "default_base_color_channel": 1,
    "default_detail_color_channel": 1,
    "frame": "gdh_spike_04_001.png",
    "glow_frame": "gdh_spike_04_glow_001.png",
    "gridH": 0.3333333432674408,
    "gridW": 0.3333333432674408,
    "spritesheet": "GJ_GameSheet02-uhd",
    "type": "hazard",
    "z": 5,
    "default_z_layer": 1,
    "default_z_order": 5
  }
};

export const hazardObjects = hazardData;
