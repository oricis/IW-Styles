
class PageTabsComponent
{

    ////////////////////////////////////////////////////////////////////
    // Modify UI

    deactivateTabControls() // js node
    {
        qsa('ul.tab-controls li.tab-control')
            .forEach(btn => btn.classList.remove('active'));
    }
    disablePaginationButtons() // js node
    {
        qsa('ul.tab-pagination li.bnt')
            .forEach(btn => btn.classList.add('disabled'));
    }
    disableTabControls() // js node
    {
        qsa('ul.tab-controls li.tab-control')
            .forEach(btn => btn.classList.add('disabled'));
    }
    enablePaginationButtons() // js node
    {
        qsa('ul.tab-pagination li.bnt')
            .forEach(btn => btn.classList.remove('disabled'));
    }
    enableTabControls() // js node
    {
        qsa('ul.tab-controls li.tab-control')
            .forEach(btn => btn.classList.remove('disabled'));
    }

    setVisibleContentTab(contentTabId) // void
    {
        this.getContentTabs().forEach(contentTab => // void
        {
            contentTab.hidden = (contentTab.getAttribute('id') !== contentTabId);
        });
    }

    toggleActiveTabControl(clickedTabControl) // void
    {
        this.deactivateTabControls();
        clickedTabControl.classList.add('active');
    }
    togglePaginationButtons(visibleContentTab, clickedButton) // void
    {
        const buttonLast = this.getPaginationButtonLast();
        const buttonNext = this.getPaginationButtonNext();
        if (!buttonLast || !buttonNext) {
            return;
        }

        buttonLast.classList.remove('disabled');
        buttonNext.classList.remove('disabled');

        const tabNumber = parseInt(visibleContentTab.dataset.number);
        log('@togglePaginationButtons - tabNumber: ' + tabNumber)

        if (clickedButton === 'last' && tabNumber > 1) {
            if (tabNumber === 1) {
                buttonNext.classList.add('disabled');
            } else {
                // NOTE: toggle visible tag to last
                const number = tabNumber - 1;
                this.toggleVisibleTab(this.getContentTabByNumber(number));
            }

            return;
        }
        if (clickedButton === 'next'
            && visibleContentTab.dataset.active == 1) {

            if (tabNumber === (this.getContentTabsTotal() - 1)) {
                buttonNext.classList.add('disabled');
            }
            // NOTE: toggle visible tag to next
            const number = tabNumber + 1;
            this.toggleVisibleTab(this.getContentTabByNumber(number));

            return;
        }
    }

    toggleVisibleTab(visibleContentTab) // void
    {
        log('@toggleVisibleTab - visibleContentTabId: ' + visibleContentTab.getAttribute('id'))
        const visibleContentTabId = visibleContentTab.getAttribute('id');
        const activeTabControl = this.getTabControlByTarget(visibleContentTabId);

        this.setVisibleContentTab(visibleContentTabId);
        this.toggleActiveTabControl(activeTabControl);
    }

    ////////////////////////////////////////////////////////////////////
    // Get DOM nodes

    getContentTabByNumber(number) // js node
    {
        return qs('article[data-number="' + number + '"]');
    }
    getContentTabs() // js nodes
    {
        return qsa('.tab-contents .tab-content');
    }
    getContentTabsTotal(contentTabs) // int
    {
        contentTabs = (contentTabs) ? contentTabs : this.getContentTabs();

        return contentTabs.length;
    }
    getPaginationButtonLast() // js node
    {
        return qs('ul.tab-pagination li#to-last-button');
    }
    getPaginationButtonNext() // js node
    {
        return qs('ul.tab-pagination li#to-next-button');
    }
    getTabControlByTarget(targetContentTabId) // js node
    {
        return qs('li[data-target="' + targetContentTabId + '"]');
    }
    getTabControls() // js nodes
    {
        return qsa('.tab-controls .tab-control');
    }
    getVisibleContentTabNode() // js node
    {
        const contentTabs = this.getContentTabs();
        for (let index = 0; index < contentTabs.length; index++) {
            const contentTab = contentTabs[index];

            if (!contentTab.hidden) {
                return contentTab;
            }
        }

        return null;
    }
}
