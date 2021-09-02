import { VCard } from '@covve/easy-vcard';
export const getVCard = () => {
    const myVCard = new VCard();

    myVCard
        .addFirstName('Juan Marcelo')
        .addLastName('Panasiti')
        .addEmail('juanpanasiti@gmail.com', { type: 'work' })
        .addPhone('+549 2615320484', { pref: '549', type: 'mobile' })
        .addUrl('www.juanpanasiti.com.ar')
        .addPhoto('https://lh3.googleusercontent.com/ogw/ADea4I56-j2NATWJxTLzosN4IEq0tVstbm6I5gnmyvuTiQ8=s83-c-mo');

    return myVCard;
};
