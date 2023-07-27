import banner_modal_1 from '../images/carousel/modal/modal-banner-ver01.png';
import banner_modal_2 from '../images/carousel/modal/modal-banner-ver02.png';
import banner_modal_3 from '../images/carousel/modal/modal-banner-ver03.png';
import banner_modal_4 from '../images/carousel/modal/modal-banner-ver04.png';
import banner_modal_5 from '../images/carousel/modal/modal-banner-ver05.png';
import banner_modal_6 from '../images/carousel/modal/modal-banner-ver06.png';
import banner_modal_7 from '../images/carousel/modal/modal-banner-ver07.png';
import banner_modal_8 from '../images/carousel/modal/modal-banner-ver08.png';
import banner_modal_9 from '../images/carousel/modal/modal-banner-ver09.png';

import modal_image_0_1 from '../images/carousel/modal/img_0_1.png';
import modal_image_0_2 from '../images/carousel/modal/img_0_2.png';
import modal_image_1_1 from '../images/carousel/modal/img_1_1.png';
import modal_image_1_2 from '../images/carousel/modal/img_1_2.png';
import modal_image_2_1 from '../images/carousel/modal/img_2_1.png';
import modal_image_2_2 from '../images/carousel/modal/img_2_2.png';
import modal_image_3_1 from '../images/carousel/modal/img_3_1.png';
import modal_image_3_2 from '../images/carousel/modal/img_3_2.png';
import modal_image_4_1 from '../images/carousel/modal/img_4_1.png';
import modal_image_4_2 from '../images/carousel/modal/img_4_2.png';
import modal_image_5_1 from '../images/carousel/modal/img_5_1.png';
import modal_image_5_2 from '../images/carousel/modal/img_5_2.png';
import modal_image_6_1 from '../images/carousel/modal/img_6_1.png';
import modal_image_6_2 from '../images/carousel/modal/img_6_2.png';
import modal_image_6_3 from '../images/carousel/modal/img_6_3.png';
import modal_image_7_1 from '../images/carousel/modal/img_7_1.png';
import modal_image_7_2 from '../images/carousel/modal/img_7_2.png';
import modal_image_8_1 from '../images/carousel/modal/img_8_1.png';
import modal_image_8_2 from '../images/carousel/modal/img_8_2.png';

export type workModalDataType = {
  id: number;
  title_1: string;
  title_2: string;
  title_3?: string;
  img_1: string;
  img_2: string;
  img_3?: string;
  description: string;
};

export enum titleName {
  DESKTOP = '電腦版',
  MOBILE = '手機版',
  DARK = '暗版',
  LIGHT = '亮版',
  WEBSITE = '網頁',
  POSTER = '輔助銷售物海報',
  BOX = '輔助銷售物盒子',
  MAIN_ART = '主視覺',
  MAIN_ART_THINKING = '主視覺發想',
  GAME_CONSOLE_MAIN_ART = '遊戲介面主視覺',
  GAME_CONSOLE_ORIGIN = '遊戲介面原始設計',
}

export const WORK_MODAL_BANNERS = [
  banner_modal_1,
  banner_modal_2,
  banner_modal_3,
  banner_modal_4,
  banner_modal_5,
  banner_modal_6,
  banner_modal_7,
  banner_modal_8,
  banner_modal_9,
];

export const WORK_MODAL_DATA = [
  {
    id: 0,
    title_1: titleName.DARK,
    title_2: titleName.LIGHT,
    img_1: modal_image_0_1,
    img_2: modal_image_0_2,
    description:
      '以太空為主題，製造出網路無國際，隨時都可以輕鬆恣意地玩遊戲，紫色是一個華麗而神祕的顏色，帶領出穿梭太空理帶領出太空裡探險的神祕感。',
  },
  {
    id: 1,
    title_1: titleName.DESKTOP,
    title_2: titleName.MOBILE,
    img_1: modal_image_1_1,
    img_2: modal_image_1_2,
    description:
      '整個舞台都是你的發展空間，讓你可以恣意的穿梭在各個遊戲間玩遊戲。',
  },
  {
    id: 2,
    title_1: titleName.DESKTOP,
    title_2: titleName.MOBILE,
    img_1: modal_image_2_1,
    img_2: modal_image_2_2,
    description: '以籌碼為主題，彷彿身歷其境的遊玩遊戲，添增遊戲的體驗感。',
  },
  {
    id: 3,
    title_1: titleName.DESKTOP,
    title_2: titleName.MOBILE,
    img_1: modal_image_3_1,
    img_2: modal_image_3_2,
    description:
      '你是一位運籌帷幄、行事果斷的戰略家嗎？讓玩家體驗即時戰略的快感，在對戰中運用不同的戰術，打造屬於自己的勝利方式。',
  },
  {
    id: 4,
    title_1: titleName.DESKTOP,
    title_2: titleName.MOBILE,
    img_1: modal_image_4_1,
    img_2: modal_image_4_2,
    description:
      '場中及單場投注，賠率變化都能即時下單，氣候變化也不怕，只要有網路就能到處下單，各國賽事都能不受地域限制的下單，睡前還能躺著下單。',
  },
  {
    id: 5,
    title_1: titleName.DESKTOP,
    title_2: titleName.MOBILE,
    img_1: modal_image_5_1,
    img_2: modal_image_5_2,
    description:
      '玩遊戲也可以很紳士，彷彿優雅地聽著音樂，不疾不徐的以最適合自己的步伐來玩遊戲。',
  },
  {
    id: 6,
    title_1: titleName.WEBSITE,
    title_2: titleName.POSTER,
    title_3: titleName.BOX,
    img_1: modal_image_6_1,
    img_2: modal_image_6_2,
    img_3: modal_image_6_3,
    description:
      '以忍者融合 cyberpunk 為主體，忍者的飛天遁地，以下水道為連接外界的出入口，看似被困在牢籠中，卻又可以自由的觀察世界的變化。',
  },
  {
    id: 7,
    title_1: titleName.MAIN_ART,
    title_2: titleName.MAIN_ART_THINKING,
    img_1: modal_image_7_1,
    img_2: modal_image_7_2,
    description:
      '故事背景建立於「低階生活與高等科技的結合」，普遍擁有先進的科學技術，再以一定程度崩壞的社會結構做對比。',
  },
  {
    id: 8,
    title_1: titleName.GAME_CONSOLE_MAIN_ART,
    title_2: titleName.GAME_CONSOLE_ORIGIN,
    img_1: modal_image_8_1,
    img_2: modal_image_8_2,
    description:
      '某一次玩見縫插針這個遊戲的時候，心想有可能讓這個遊戲的視覺效果更豐富嗎？於是就把披薩帶入了此款遊戲了，披薩店店員需要製作出完整的批撒才可以出單賺錢。',
  },
];
