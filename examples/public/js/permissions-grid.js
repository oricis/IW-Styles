$(document).ready(function ()
{
    function handlePermissions()
    {
        const activeButtonClass = 'bg-active';
        const activeResourceCrudClass = 'bg-active-container';

        function handleSelection()
        {
            function handleButtonsToControlAllTheGroup()
            {
                function handleGroup(groupId)
                {
                    const btnSelectAll   = $(groupId + ' .select-all-btn');
                    const btnUnselectAll = $(groupId + ' .unselect-all-btn');
                    const permissions    = $(groupId + ' .square-selector');
                    const permissionRows = $(groupId + ' .resource-permissions');

                    btnSelectAll.click(function ()
                    {
                        $(this).toggleClass('none');
                        btnUnselectAll.toggleClass('none');

                        selectAll(permissionRows, permissions);
                        $(groupId).addClass(activeResourceCrudClass);
                    });
                    btnUnselectAll.click(function ()
                    {
                        $(this).toggleClass('none');
                        btnSelectAll.toggleClass('none');

                        unselectAll(permissionRows, permissions);
                        $(groupId).removeClass(activeResourceCrudClass);
                    });


                    function selectAll(nodeRows, nodePermissions)
                    {
                        nodeRows.each(function ()
                        {
                            $(this).addClass(activeResourceCrudClass);
                        });
                        nodePermissions.each(function ()
                        {
                            $(this).addClass(activeButtonClass);
                        });
                    }

                    function unselectAll(nodeRows, nodePermissions)
                    {
                        nodeRows.each(function ()
                        {
                            $(this).removeClass(activeResourceCrudClass);
                        });
                        nodePermissions.each(function ()
                        {
                            $(this).removeClass(activeButtonClass);
                        });
                    }
                }

                handleGroup('#ecommerce-permission-group');
                handleGroup('#users-permission-group');
            }

            function handleCrudOptionsSelection()
            {
                const resourceCrudButtons = $('.square-selector')
                    .not('.resource-permissions .square-selector:last-of-type');

                resourceCrudButtons.click(function ()
                {
                    const crudOptionButton = $(this);
                    const crudAllButton = crudOptionButton
                        .siblings('.square-selector:last-of-type');

                    crudOptionButton.toggleClass(activeButtonClass);
                    const parentGroupOfTheCrud = crudOptionButton.parents('.permission-group');
                    handleGroupsUI(parentGroupOfTheCrud);

                    // Deactivate resource row
                    if (crudAllButton.hasClass(activeButtonClass)) {
                        crudAllButton.removeClass(activeButtonClass);
                        crudAllButton.parent().removeClass(activeResourceCrudClass);

                        return;
                    }

                    // Check if the complete row is selected now
                    if (isSelectedAllTheCrud(crudOptionButton)) {
                        crudAllButton.addClass(activeButtonClass);
                        crudAllButton.parent().addClass(activeResourceCrudClass);
                    }

                    function isSelectedAllTheCrud(clickedButton)
                    {
                        function getSelectedCrudOptions(resourceButtons)
                        {
                            const selected = [];
                            resourceButtons.each(function ()
                            {
                                const button = $(this);
                                if (button.hasClass(activeButtonClass)
                                    && button.text() !== 'All') {
                                    selected.push(button.text());
                                }
                            });

                            return selected;
                        }

                        const siblingButtons = clickedButton.siblings();
                        const siblingButtonTexts = getSelectedCrudOptions(siblingButtons);

                        return (siblingButtonTexts.length === 3
                            && ! siblingButtonTexts.includes(clickedButton.text()));
                    }
                });
            }

            function handleResourceRowAllButtons()
            {
                const boxesAll = $('.resource-permissions .square-selector:last-of-type');
                boxesAll.click(function ()
                {
                    handleResourceRowAllButtonActivation($(this));
                });

                function handleResourceRowAllButtonActivation(allButton)
                {
                    const rowButtonAllStatus = (allButton.hasClass(activeButtonClass))
                        ? 'selected'
                        : 'unselected';

                    const resourceRow = allButton.parent();
                    const resourceRowCrudOptions = resourceRow.children();

                    resourceRowCrudOptions.each(function ()
                    {
                        const crudOption = $(this);

                        if (rowButtonAllStatus === 'selected') {
                            crudOption.removeClass(activeButtonClass);
                        } else {
                            crudOption.addClass(activeButtonClass);
                        }
                    });

                    const parentGroupOfTheCrud = allButton.parents('.permission-group');
                    handleGroupsUI(parentGroupOfTheCrud);

                    if (rowButtonAllStatus === 'selected') {
                        resourceRow.removeClass(activeResourceCrudClass);
                    } else {
                        resourceRow.addClass(activeResourceCrudClass);
                    }
                }
            }

            function handleGroupsUI(groupNode)
            {
                setTimeout(() => {
                    if (isEachCrudSelectedOnTheGroup(groupNode)) {
                        setGroupAsAllSelected(groupNode);
                    } else {
                        setGroupAsSomeUnselected(groupNode);
                    }
                }, 5);


                function isEachCrudSelectedOnTheGroup(groupNode)
                {
                    let flag = true;

                    const allButtons = groupNode.find('.square-selector:last-of-type');
                    allButtons.each(function ()
                    {
                        const button = $(this);
                        if (! button.hasClass(activeButtonClass)) {
                            flag = false;
                        }
                    });

                    return flag;
                }

                function setGroupAsAllSelected(groupNode)
                {
                    const groupButtons = groupNode.find('.button-group button');
                    $(groupButtons[0]).addClass('none');
                    $(groupButtons[1]).removeClass('none');

                    groupNode.addClass(activeResourceCrudClass);
                }

                function setGroupAsSomeUnselected(groupNode)
                {
                    const groupButtons = groupNode.find('.button-group button');
                    $(groupButtons[0]).removeClass('none');
                    $(groupButtons[1]).addClass('none');

                    groupNode.removeClass(activeResourceCrudClass);
                }
            }



            handleResourceRowAllButtons();
            handleButtonsToControlAllTheGroup();
            handleCrudOptionsSelection();
        }

        function toggleResourcePermissions(resourceGroupId)
        {
            const boxes = $(resourceGroupId + ' .square-selector');
            boxes.each(function ()
            {
                $(this).toggleClass(activeButtonClass);
            });
            $(resourceGroupId).toggleClass(activeResourceCrudClass);
        }


        handleSelection();

        // HACK: init resource groups
        toggleResourcePermissions('#products-permissions');
        toggleResourcePermissions('#users-permissions');
        toggleResourcePermissions('#variations-permissions');
    }

    handlePermissions();
});
