import { IParams, wineParty, orderSale, enterStore, drinkMealRanking, customerAgeGender, areaPreference } from '@/api/todo'



export default function () {
  const resList = ref<any[]>([])
  async function getAll(params: IParams) {
    resList.value = await Promise.all([orderSale(params), drinkMealRanking(params), areaPreference(params), customerAgeGender(params), enterStore(params), wineParty(params)])
  }

  return {
    resList,
    getAll
  }
}
