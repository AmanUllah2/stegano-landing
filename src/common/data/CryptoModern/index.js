/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/cryptoModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Steganography',
      path: '#key-features',
      offset: '81',
    },
    {
      id: 3,
      label: 'OwnershipChain',
      path: '#fund',
      offset: '81',
    },
    {
      id: 4,
      label: 'Whitepaper',
      path: '#pdf',
      offset: '81',
    },
    {
      id: 5,
      label: 'About Us',
      path: '#about',
      offset: '81',
    },
    {
      id: 6,
      label: 'Contact',
      path: '#contact',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/cryptoModern/lock.svg';
import featureIcon2 from 'common/assets/image/cryptoModern/res.svg';
import featureIcon3 from 'common/assets/image/cryptoModern/easy.svg';
import featureIcon4 from 'common/assets/image/cryptoModern/dna.svg';

export const Features = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Robust security',
    description:
      'The link between the smart contract and the file is bi-directional. The file points to a unique smart contract and the smart contract points to a unique file.',
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'Resilient traceability',
    description:
      'The traceability of each owner over time is recorded directly within the smart contract and the result is always embedded into the file.',
  },
  {
    id: 3,
    icon: featureIcon3,
    title: 'Easy audit',
    description:
      'Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining.',
  },
  {
    id: 4,
    icon: featureIcon4,
    title: 'Digital DNA',
    description:
      'Every single owner influences the cryptographic legacy of the token.',
  },
];

/* ------------------------------------ */
// Wallet  data section
/* ------------------------------------ */
import walletIcon1 from 'common/assets/image/cryptoModern/wallet1.png';
import walletIcon2 from 'common/assets/image/cryptoModern/wallet2.png';
import walletIcon3 from 'common/assets/image/cryptoModern/wallet3.png';

export const WalletFeatures = [
  {
    id: 1,
    icon: walletIcon1,
    title: 'Secure transfers with verified Casinos.',
  },
  {
    id: 2,
    icon: walletIcon2,
    title: 'Easily buy and sell CLV within the wallet',
  },
  {
    id: 3,
    icon: walletIcon3,
    title: 'Pay as many as you want',
  },
];

/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 1,
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    id: 2,
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    id: 3,
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    id: 4,
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const Footer_Data = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];
