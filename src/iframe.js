import request from './utils/request'

async function fn() {
  try {
    const { data } = await request.get(
      'http://127.0.0.1:4523/m1/1055430-0-default/api/v1/warnings/findwarningsbyuserid/123'
    )
    console.log('iframe', data)
  } catch (e) {
    console.log(e)
  }
}
fn()

console.log('iframe', request)
