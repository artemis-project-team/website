import React from 'react';
export const Nav21DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jxpfzoc5pgn-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: './images/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header2-menu',
    children: [
      {
        name: 'Banner0_0',
        to: 'Banner0_0',
        children: 'Banner0_0',
        className: 'menu-item',
      },
      {
        name: 'Content0_0',
        to: 'Content0_0',
        children: 'Content0_0',
        className: 'menu-item',
      },
      {
        name: 'Content3_0',
        to: 'Content3_0',
        children: 'Content3_0',
        className: 'menu-item',
      },
      {
        name: 'Feature4_0',
        to: 'Feature4_0',
        children: 'Feature4_0',
        className: 'menu-item',
      },
      {
        name: 'Feature5_0',
        to: 'Feature5_0',
        children: 'Feature5_0',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: 'Content9_0',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  menuLink: { children: [] },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0 jxpfbx10fr-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: '',
  },
  content: {
    className: 'banner0-content',
    children: '',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper jxoilmdee4h-editor_css',
  },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Features' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './images/blue/mining.png',
          },
          title: { className: 'content0-title', children: 'Power efficient Mining' },
          content: { children: 'Mine with hard drivers, better power efficient mining compared with ASIC mining.' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './images/blue/posc.png',
          },
          title: {
            className: 'content0-title',
            children: 'POSC',
          },
          content: { children: 'Inclusive and decentralized consensus protocol.' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './images/blue/program.png',
          },
          title: { className: 'content0-title', children: 'Programmable Platform' },
          content: { children: 'Virtual machine in side and support to create programmable crypto-currencies. ' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: './images/blue/fin.png',
          },
          title: { className: 'content0-title', children: 'DeFi Empowerment' },
          content: { children: 'ARS as base currency and aimed at mass adoption in DeFi businesses.' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: {
    className: 'home-page-wrapper content3-wrapper jxpg1rq5mva-editor_css',
  },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'About Artemis',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: './images/blue/platform.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Public blockchain platform' },
          content: {
            className: 'content3-content',
            children: 'Anyone can use Artemis blockchain platform and can work as a node in Artemis network.',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: './images/blue/mininghd.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Mining with HD' },
          content: {
            className: 'content3-content',
            children: 'Different from ASIC mining, Artemis mining is based on storages contributed to Artemis network. ',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: './images/blue/vm.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'VM inside' },
          content: {
            className: 'content3-content',
            children: 'Artemis VM support to create programs for specific purpose, including a new decentralized crypto-currency or a decentralized application.',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: './images/blue/programable.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Programing' },
          content: {
            className: 'content3-content',
            children: 'Turing-complete programming language supported in Artemis, and now solidity is supported, WASM will be supported in future. ',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: './images/blue/ars.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'ARS' },
          content: {
            className: 'content3-content',
            children: 'Artemis designed ARS as base currency, which keep the ecosystem running. It will be the incentive for Artemis network maintenance as well as exchange between different parities in the ecosystem.',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: './images/blue/governance.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Governance' },
          content: {
            className: 'content3-content',
            children: 'Artemis is a fully decentralized platform, the design and construction of the platform is contributed by community and open source projects. ARS distribution is mined by miners except a small piece of it used to incentivize program geeks building the platform and attract initial miners.',
          },
        },
      },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Artemis parameters',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  img: {
    children: './images/xBrUaDROgtFBRRL.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children: './images/MNdlBNhmDBLuzqp.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: 'Block interval: 3 minutes' },
        content: {
          className: 'content6-content',
          children: '',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children: './images/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: 'Total supply: 21 million' },
        content: {
          className: 'content6-content',
          children: '',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children: './images/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: 'Initial supply: 2.1 million' },
        content: {
          className: 'content6-content',
          children: '',
        },
      },
      {
        name: 'block3',
        img: {
          className: 'content6-icon',
          children: './images/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: 'Mining Reserve: 18.9 million' },
        content: {
          className: 'content6-content',
          children: '',
        },
      },
      {
        name: 'block4',
        img: {
          className: 'content6-icon',
          children: './images/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: 'Halving Cycle: 4 years' },
        content: {
          className: 'content6-content',
          children: '',
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: {
    className: 'home-page-wrapper content7-wrapper jxpf716ipr-editor_css',
  },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Download Artemis',
        className: 'title-h1',
      },
      { name: 'content', children: 'Download artemis resources' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'Chrome extension', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h1>Brings Artemis to your browser</h1>
                  <p> MetaArs is a bridge that allows you to visit the distributed web of tomorrow in your browser today. 
                    It allows you to run Artemis dApps right in your browser without running a full Artemis node. </p>
                  <p>You can install the MetaArs add-on in Chrome. If you’re a developer, you can start developing with MetaArs today.</p>
                  <p> Our mission is to make Artemis as easy to use for as many people as possible.</p>
                  <br />
                  <div key="button1" className="download-button clearfix">
                    <a href='https://github.com/artemis-project-team/metaars-extension/releases' target='_blank'> Dowload MetaArs for Chrome </a>
                    
                  </div>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            children: './images/metaars.jpeg',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'Full node wallet download' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h1>Artemis full node wallet</h1>
                  <p>Synchronize completed Artemis blockchain ledger.</p>
                  <p>Secure, wallet keys are protected with password and kept in local disk.</p>
                  <p>Flexible, support to program new crypto-currencies.</p>
                  <p>Full node wallet is required for mining.</p>
                  <br />
                  <div key="button1" className="download-button clearfix">
                    <a href='https://github.com/artemis-project-team/artemis/releases' target='_blank'> Dowload for Windows </a>
                    <a href='https://github.com/artemis-project-team/artemis/releases' target='_blank'> Dowload for Mac </a>
                    <a href='https://github.com/artemis-project-team/artemis/releases' target='_blank'> Dowload for Linux </a>
                  </div>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: './images/blue/programable.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'Artemis mining', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h1>Miner</h1>
                  <p>
                    <a href='https://github.com/JohnnyFFM/miner-burst/releases' target='_blank'> github.com/JohnnyFFM/miner-burst/releases </a>
                  </p>
                  <h1>Plotter</h1>
                  <a href='	https://github.com/Blagodarenko/XPlotter' target='_blank'> github.com/Blagodarenko/XPlotter </a>
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children: './images/miner3.png',
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: '',
        className: 'title-image',
      },
      { name: 'title', children: 'Roadmap', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: './images/pearl.png',
          },
          icon: {
            className: 'block-icon',
            children: './images/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: 'Pearl' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: 'Jul 2019' },
          title: { className: 'block-title', children: 'Artemis V0.1' },
          content: { className: 'block-content', children: 'Initial released.' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: './images/crystal.png',
          },
          icon: {
            className: 'block-icon',
            children: './images/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: 'Crystal' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: 'Sep 2019' },
          title: { className: 'block-title', children: 'Artemis V1.0' },
          content: {
            className: 'block-content', children: 'Artemis stable release, expending miners to join and contribute to the network. Allowing different parties to create programmable crypto currencies on the platform.',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: './images/diamond.png',
          },
          icon: {
            className: 'block-icon',
            children: './images/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: 'Diamond' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '2Oct 2020' },
          title: { className: 'block-title', children: 'Artemis V2.0' },
          content: {
            className: 'block-content',
            children: 'Upgrade the VM to support more types of programing languages, and make it as a flexible and secured DeFi platform.',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: './images/qiu1.png',
          },
          icon: {
            className: 'block-icon',
            children: './images/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: 'Future' },
          post: { className: 'block-post', children: '' },
          time: { className: 'block-time', children: '' },
          title: { className: 'block-title', children: '' },
          content: {
            className: 'block-content',
            children: '',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2019 <a href="https://artemisproject.io">Artemis</a> All Rights Reserved
        </span>
      </>
    ),
  },
};
