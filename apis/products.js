import loadFirebase from '../firebase.config'

export const registerOrderIntoFirebase = async (order) => {
  const firebase = await loadFirebase()
  const db = firebase.firestore()

  let result = await new Promise((resolve, reject) => {
    db.collection('orders')
      .add(order)
      .then((docRef) => {
        resolve(docRef)
      })
      .catch((error) => {
        reject(error)
      })
  })

  console.log(result.id)
}
