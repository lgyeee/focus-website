/**
 * Toggle the display/hide state of condition list
 * @param {HTMLElement} tagElement - The clicked tag element (contains text and icon)
 * @param {string} targetId - The target content block ID
 */
function toggleConditions(tagElement, targetId) {
    const contentBlock = document.getElementById(targetId);
    const icon = tagElement.querySelector('.toggle-icon');

    if (contentBlock) {
        contentBlock.classList.toggle('hidden');

        if (contentBlock.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(-180deg)';
        }
    }
}