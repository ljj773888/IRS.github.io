function supportsUserSelectContain() {
  const el = document.createElement('div')
  el.style.cssText = '-ms-user-select: element; user-select: contain;'
  return (
    el.style.getPropertyValue('-ms-user-select') === 'element' ||
    el.style.getPropertyValue('-ms-user-select') === 'contain' ||
    el.style.getPropertyValue('user-select') === 'contain'
  )
}
function handleUserSelectContain(event: Event) {
  if (!(event.target instanceof Element)) return
  const currentTarget = event.target.closest('.user-select-contain')
  if (!currentTarget) return

  const selection = window.getSelection()
  if (!selection) return
  if (!selection.rangeCount) return
  if (!selection.rangeCount || selection.type !== 'Range') return

  const container = selection.getRangeAt(0).commonAncestorContainer
  if (currentTarget.contains(container)) return
  selection.selectAllChildren(currentTarget)
}

if (!supportsUserSelectContain()) {
  document.addEventListener('click', handleUserSelectContain)
}
