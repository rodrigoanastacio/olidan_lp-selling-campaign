const accordion = document.querySelector('[data-js="accordion"]');

export function openAccordion() {
  accordion.addEventListener('click', (e) => {
    const accordionLabelID = e.target.dataset.accordionLabel;
    const clickedAccordionBtn = document.querySelector(
      `[data-accordion-label="${accordionLabelID}"]`
    );
    const accordionItemToBeOpened = document.querySelector(
      `[data-accordion-content="${accordionLabelID}"]`
    );

    if (!e.target.dataset.accordionLabel) {
      return;
    }

    const accordionLabelToBeClosed = Array.from(
      document.querySelectorAll('[data-js="c-accordion__label"]')
    )
      .filter((accordionLabel) => accordionLabel !== clickedAccordionBtn)
      .find((accordionLabel) => accordionLabel.classList.contains('is-open'));

    if (accordionLabelToBeClosed) {
      const accordionItemToBeClosed = document.querySelector(
        `[data-accordion-content="${accordionLabelToBeClosed.dataset.accordionLabel}"]`
      );

      accordionLabelToBeClosed.classList.remove('is-open');
      accordionItemToBeClosed.classList.remove('is-open');
    }

    clickedAccordionBtn.classList.toggle('is-open');
    accordionItemToBeOpened.classList.toggle('is-open');
  });
}
