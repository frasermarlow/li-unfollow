(() => {
  // 1) Gather every <button> whose text is exactly “Following”:
  const followBtns = Array.from(
    document.querySelectorAll('span.artdeco-button__text')
  )
    .filter(span => span.textContent.trim() === 'Following')
    .map(span => span.closest('button'));

  let idx = 0;

  function clickNext() {
    if (idx >= followBtns.length) {
      console.log('✅ All “Following” buttons in this batch have been clicked.');
      return;
    }

    const btn = followBtns[idx++];
    btn.click(); // click “Following” → opens the confirm modal

    // 2) Poll every 300ms looking for the modal’s “Unfollow” button
    let clickedUnfollow = false;
    const poll = setInterval(() => {
      // Find any <button> whose inner <span> text is exactly “Unfollow”
      const unfollowSpan = Array.from(
        document.querySelectorAll('button span.artdeco-button__text')
      ).find(span => span.textContent.trim() === 'Unfollow');

      if (unfollowSpan && !clickedUnfollow) {
        // click “Unfollow” in the modal
        clickedUnfollow = true;
        unfollowSpan.closest('button').click();
      }

      // Once we have clicked “Unfollow” (clickedUnfollow = true), wait until that span is gone
      if (clickedUnfollow) {
        const stillThere = Array.from(
          document.querySelectorAll('button span.artdeco-button__text')
        ).some(span => span.textContent.trim() === 'Unfollow');

        if (!stillThere) {
          clearInterval(poll);

          // Pick a random delay between 1s and 3s before proceeding
          const delay = 1000 + Math.random() * 2000;
          console.log(`Waiting ${Math.round(delay)}ms before next unfollow…`);
          setTimeout(clickNext, delay);
        }
      }
    }, 300);
  }

  clickNext();
})();
