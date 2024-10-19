

const popupTriggers = document.querySelectorAll('.popup__trigger')
const popups = document.querySelectorAll('.popup')
const xmarks = document.querySelectorAll('.popup__xmark-item')

const onTriggerClick = (e) => {
  const popupid = e.target.dataset['popupid']

  const popup = document.querySelector(`#${popupid}`)
  popup.classList.add('active')
}

const onXmarkClick = (e) => {
  const popup = findPopupFromXmark(e.target)
  popup.classList.remove('active')
}


popupTriggers.forEach((item) => item.addEventListener('click', onTriggerClick))
xmarks.forEach((item) => item.addEventListener('click', onXmarkClick))








function findPopupFromXmark(item, deep = 0) {
  if (item.classList.contains('popup')) {
    return item
  } else {
    return findPopupFromXmark(item.parentElement, deep + 1)
  }
}



