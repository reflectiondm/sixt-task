import superagent from 'superagent';

const SixtOffersUrl = 'https://content.sixt.io/codingtasks/offers.json';

export async function getOffersData() {
  try {
    const data = await superagent
      .get(SixtOffersUrl);

    return data.body.offers;
  } catch (error) {
    // TODO
    return [];
    console.log('No data could be loaded');
  }
}
