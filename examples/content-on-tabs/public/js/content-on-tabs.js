
document.addEventListener('DOMContentLoaded', handlePageTabsComponent);


function handlePageTabsComponent() // void
{
    const PTC = new PageTabsComponent();

    const contentTabs = PTC.getContentTabs();
    const tabControls = PTC.getTabControls();

    handleTabControls();
    handleTabPaginationButtons();


    function handleTabControls() // void
    {
        tabControls.forEach(tabControl => {
            tabControl.addEventListener('click', function () {
                PTC.toggleActiveTabControl(tabControl);

                const contentTabId = tabControl.dataset.target;
                PTC.setVisibleContentTab(contentTabId);
            });
        });
    }
    function handleTabPaginationButtons() // void
    {
        const buttonLast = PTC.getPaginationButtonLast();
        const buttonNext = PTC.getPaginationButtonNext();

        buttonLast.addEventListener('click', function () // void
        {
            const visibleContentTab = PTC.getVisibleContentTabNode();

            PTC.togglePaginationButtons(visibleContentTab, 'last');
            PTC.toggleVisibleTab(visibleContentTab);
        });
        buttonNext.addEventListener('click', function () // void
        {
            const visibleContentTab = PTC.getVisibleContentTabNode();

            PTC.togglePaginationButtons(visibleContentTab, 'next');
            PTC.toggleVisibleTab(visibleContentTab);
        });
    }
}
