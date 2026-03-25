/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

function setupHeaderUserMenu() {
    const profile = document.getElementById('header-profile')
    const trigger = document.getElementById('header-profile-trigger')
    const menu = document.getElementById('header-user-menu')

    if (!profile || !trigger || !menu) {
        return
    }

    function setMenuState(isOpen) {
        profile.classList.toggle('is-open', isOpen)
        trigger.setAttribute('aria-expanded', String(isOpen))
    }

    trigger.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()
        const shouldOpen = !profile.classList.contains('is-open')
        setMenuState(shouldOpen)
    })

    menu.addEventListener('click', (event) => {
        const disabledItem = event.target.closest('.header__user-item--disabled')
        if (disabledItem) {
            event.preventDefault()
            return
        }

        const clickedItem = event.target.closest('.header__user-item')
        if (clickedItem) {
            setMenuState(false)
        }
    })

    document.addEventListener('click', (event) => {
        if (!profile.contains(event.target)) {
            setMenuState(false)
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false)
        }
    })
}

setupHeaderUserMenu()

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')
const navPanel = document.querySelector('.nav__panel')
const mobileNav = document.getElementById('navbar')
const headerToggleButton = document.getElementById('header-toggle')

function closeMobileNavMenu() {
    if (!mobileNav || !headerToggleButton) {
        return
    }

    if (mobileNav.classList.contains('show-menu')) {
        mobileNav.classList.remove('show-menu')
        headerToggleButton.classList.remove('bx-x')
    }
}

const panelData = {
    inicio: {
        title: 'Componentes GED',
        sections: [
            {
                items: [
                    { icon: 'bx-grid-alt', label: 'Todos os arquivos', view: 'todos-arquivos', active: true },
                    { icon: 'bx-transfer', label: 'Fluxo de trabalho', view: 'fluxo-trabalho' },
                    { icon: 'bx-pen', label: 'Assinatura digital', view: 'assinatura-digital' },
                    { icon: 'bx-hdd', label: 'Armazenamento digital', view: 'armazenamento-digital' }
                ]
            },
        ]
    },
    perfil: {
        title: 'Perfil',
        sections: [
            {
                items: [
                    { icon: 'bx-id-card', label: 'Dados pessoais', active: true },
                    { icon: 'bx-lock-alt', label: 'Seguranca' },
                    { icon: 'bx-badge-check', label: 'Permissoes' }
                ]
            },
            {
                title: 'Preferencias',
                items: [
                    { icon: 'bx-cog', label: 'Configuracoes' },
                    { icon: 'bx-bell', label: 'Notificacoes' }
                ]
            }
        ]
    },
    pastas: {
        title: 'Pastas',
        sections: [
            {
                items: [
                    { icon: 'bx-folder', label: 'Todas as pastas', active: true },
                    { icon: 'bx-folder-open', label: 'Recentes' },
                    { icon: 'bx-folder-plus', label: 'Criar nova pasta' }
                ]
            }
        ]
    },
    mensagens: {
        title: 'Mensagens',
        sections: [
            {
                items: [
                    { icon: 'bx-chat', label: 'Caixa de entrada', active: true },
                    { icon: 'bx-send', label: 'Enviadas' },
                    { icon: 'bx-archive', label: 'Arquivadas' }
                ]
            }
        ]
    },
    alertas: {
        title: 'Alertas',
        sections: [
            {
                items: [
                    { icon: 'bx-error-alt', label: 'Pendencias', active: true },
                    { icon: 'bx-time-five', label: 'Vencimentos' },
                    { icon: 'bx-check-circle', label: 'Aprovacoes' }
                ]
            }
        ]
    },
    explorar: {
        title: 'Explorar',
        sections: [
            {
                items: [
                    { icon: 'bx-search-alt', label: 'Buscas recentes', active: true },
                    { icon: 'bx-layer', label: 'Colecoes' },
                    { icon: 'bx-folder-open', label: 'Pastas compartilhadas' }
                ]
            }
        ]
    },
    favoritos: {
        title: 'Favoritos',
        sections: [
            {
                items: [
                    { icon: 'bx-star', label: 'Documentos', active: true },
                    { icon: 'bx-pin', label: 'Fixados' },
                    { icon: 'bx-time', label: 'Recentes' }
                ]
            }
        ]
    }
}

const mockTodosArquivosData = {
    accessOptions: ['Público', 'Restrito', 'Partilhado'],
    typeOptions: ['Pasta', 'Documento', 'Imagens', 'PDFs', 'Vídeos', 'Arquivos (.zip)', 'Áudio'],
    locationOptions: ['O meu disco', 'Área compartilhada', 'Favoritos', 'Lixeira'],
    modifiedOptions: ['Hoje', 'Últimos 7 dias', 'Últimos 30 dias', 'Personalizado'],
    folders: {
        'root': {
            id: 'root',
            name: 'Todos os arquivos',
            items: [
                {
                    id: 'folder-teste',
                    type: 'folder',
                    name: 'teste',
                    lastModified: 'Atualizado em • 03/02',
                    size: '1,2 GB',
                    itemCount: 3,
                    access: 'Partilhado',
                    location: 'Área compartilhada',
                    fileType: 'Pasta',
                    modifiedDate: new Date('2026-02-03'),
                    isRecent: true,
                    isFavorite: false,
                    isDeleted: false
                },
                {
                    id: 'item-2',
                    type: 'pdf',
                    name: 'Documento Exemplo B.pdf',
                    lastModified: 'Atualizado em • 13/02',
                    size: '2,8 MB',
                    access: 'Restrito',
                    location: 'O meu disco',
                    fileType: 'PDFs',
                    modifiedDate: new Date('2026-02-13'),
                    isRecent: true,
                    isFavorite: true,
                    isDeleted: false
                },
                {
                    id: 'item-3',
                    type: 'doc',
                    name: 'Relatório Exemplo C.doc',
                    lastModified: 'Atualizado em • 20/01',
                    size: '860 KB',
                    access: 'Partilhado',
                    location: 'Favoritos',
                    fileType: 'Documento',
                    modifiedDate: new Date('2026-01-20'),
                    isRecent: false,
                    isFavorite: true,
                    isDeleted: false
                },
                {
                    id: 'item-4',
                    type: 'pdf',
                    name: 'Arquivo Exemplo D.pdf',
                    lastModified: 'Atualizado em • 03/02',
                    size: '1,1 MB',
                    access: 'Partilhado',
                    location: 'Lixeira',
                    fileType: 'PDFs',
                    modifiedDate: new Date('2026-02-03'),
                    isRecent: false,
                    isFavorite: false,
                    isDeleted: false
                }
            ]
        },
        'folder-teste': {
            id: 'folder-teste',
            name: 'teste',
            items: [
                {
                    id: 'folder-teste-teste',
                    type: 'folder',
                    name: 'teste teste',
                    lastModified: 'Atualizado em • 15/02',
                    size: '850 MB',
                    itemCount: 12,
                    access: 'Partilhado',
                    location: 'Área compartilhada',
                    fileType: 'Pasta',
                    modifiedDate: new Date('2026-02-15'),
                    isRecent: true,
                    isFavorite: false,
                    isDeleted: false
                },
                {
                    id: 'file-teste-1',
                    type: 'pdf',
                    name: 'Documento Teste.pdf',
                    lastModified: 'Atualizado em • 10/02',
                    size: '540 KB',
                    access: 'Público',
                    location: 'Área compartilhada',
                    fileType: 'PDFs',
                    modifiedDate: new Date('2026-02-10'),
                    isRecent: true,
                    isFavorite: false,
                    isDeleted: false
                },
                {
                    id: 'file-teste-2',
                    type: 'doc',
                    name: 'Arquivo Teste.doc',
                    lastModified: 'Atualizado em • 08/02',
                    size: '230 KB',
                    access: 'Público',
                    location: 'Área compartilhada',
                    fileType: 'Documento',
                    modifiedDate: new Date('2026-02-08'),
                    isRecent: false,
                    isFavorite: false,
                    isDeleted: false
                },
                {
                    id: 'file-teste-deleted-1',
                    type: 'pdf',
                    name: 'Documento Excluído.pdf',
                    lastModified: 'Excluído em • 05/02',
                    size: '1,2 MB',
                    access: 'Público',
                    location: 'Área compartilhada',
                    fileType: 'PDFs',
                    modifiedDate: new Date('2026-02-05'),
                    isRecent: false,
                    isFavorite: false,
                    isDeleted: true
                },
                {
                    id: 'file-teste-deleted-2',
                    type: 'doc',
                    name: 'Relatório Antigo.doc',
                    lastModified: 'Excluído em • 01/02',
                    size: '450 KB',
                    access: 'Restrito',
                    location: 'Área compartilhada',
                    fileType: 'Documento',
                    modifiedDate: new Date('2026-02-01'),
                    isRecent: false,
                    isFavorite: false,
                    isDeleted: true
                }
            ]
        },
        'folder-teste-teste': {
            id: 'folder-teste-teste',
            name: 'teste teste',
            items: [
                {
                    id: 'file-teste-teste-1',
                    type: 'pdf',
                    name: 'Relatório Final.pdf',
                    lastModified: 'Atualizado em • 18/02',
                    size: '3,2 MB',
                    access: 'Restrito',
                    location: 'Área compartilhada',
                    fileType: 'PDFs',
                    modifiedDate: new Date('2026-02-18'),
                    isRecent: true,
                    isFavorite: true,
                    isDeleted: false
                },
                {
                    id: 'file-teste-teste-2',
                    type: 'doc',
                    name: 'Notas.doc',
                    lastModified: 'Atualizado em • 17/02',
                    size: '120 KB',
                    access: 'Público',
                    location: 'Área compartilhada',
                    fileType: 'Documento',
                    modifiedDate: new Date('2026-02-17'),
                    isRecent: true,
                    isFavorite: false,
                    isDeleted: false
                }
            ]
        }
    }
}

const quickFiltersState = {
    recent: false,
    favorites: false
}

const dateFilterState = {
    mode: '',
    customFrom: null,
    customTo: null
}

const selectedFiles = new Set()

const navigationState = {
    currentFolderId: 'root',
    breadcrumb: [],
    showDeletedFiles: false
}

const fileTypeIcon = {
    folder: 'bxs-folder',
    pdf: 'bxs-file-pdf',
    doc: 'bxs-file-doc',
    default: 'bxs-file'
}

function renderSelectOptions(selectElement, placeholder, options) {
    if (!selectElement) {
        return
    }

    selectElement.innerHTML = ''

    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.textContent = placeholder
    selectElement.appendChild(defaultOption)

    options.forEach((option) => {
        const item = document.createElement('option')
        item.value = option
        item.textContent = option
        selectElement.appendChild(item)
    })
}

function createFileRow(file) {
    const row = document.createElement('div')
    row.className = 'files-list__row'
    row.setAttribute('role', 'row')
    
    // Adiciona classe especial para arquivos excluídos
    if (file.isDeleted) {
        row.classList.add('files-list__row--deleted')
    }
    
    if (file.type === 'folder') {
        row.setAttribute('data-folder-id', file.id)
        row.style.cursor = 'pointer'
    }

    const iconClass = fileTypeIcon[file.type] || fileTypeIcon.default
    const sizeLabel = file.type === 'folder' && file.itemCount
        ? `${file.size} (${file.itemCount} itens)`
        : file.size
    const checkedAttr = selectedFiles.has(file.id) ? 'checked' : ''
    
    // Não mostra checkbox para arquivos excluídos
    const checkboxHtml = file.isDeleted 
        ? '' 
        : `<input type="checkbox" class="files-list__checkbox" data-file-id="${file.id}" ${checkedAttr} aria-label="Selecionar ${file.name}" />`

    row.innerHTML = `
        <span class="files-list__select">
            ${checkboxHtml}
        </span>
        <span class="files-list__name"><i class='bx ${iconClass}'></i> ${file.name}</span>
        <span>${file.lastModified}</span>
        <span>${sizeLabel}</span>
        <span>${file.access}</span>
        <span>${file.location}</span>
    `
    
    // Adiciona click handler para pastas
    if (file.type === 'folder') {
        row.addEventListener('click', (e) => {
            // Não navega se clicou no checkbox
            if (e.target.classList.contains('files-list__checkbox')) {
                return
            }
            navigateToFolder(file.id)
        })
    }

    return row
}

function updateSelectionModeUI() {
    const quickFilters = document.querySelector('.files-quick-filters')
    const bulkActions = document.getElementById('files-bulk-actions')
    const filesList = document.querySelector('.files-list')
    const masterCheckbox = document.getElementById('select-all-files')
    const hasSelection = selectedFiles.size > 0

    if (quickFilters) {
        quickFilters.classList.toggle('is-hidden', hasSelection)
    }

    if (bulkActions) {
        bulkActions.classList.toggle('is-hidden', !hasSelection)
    }

    if (filesList) {
        filesList.classList.toggle('has-selection', hasSelection)
    }

    if (masterCheckbox) {
        // Conta apenas itens não excluídos
        const selectableItems = getCurrentFolderItems().filter(item => !item.isDeleted)
        const allItemsCount = selectableItems.length
        masterCheckbox.checked = hasSelection && selectedFiles.size === allItemsCount
        masterCheckbox.indeterminate = hasSelection && selectedFiles.size < allItemsCount
    }
}

function renderFilesList(items) {
    const filesBody = document.getElementById('files-list-body')
    if (!filesBody) {
        return
    }

    filesBody.innerHTML = ''

    if (!items.length) {
        const emptyRow = document.createElement('div')
        emptyRow.className = 'files-list__row files-list__row--empty'
        emptyRow.setAttribute('role', 'row')
        emptyRow.textContent = 'Nenhum item encontrado com os filtros selecionados.'
        filesBody.appendChild(emptyRow)
        return
    }

    items.forEach((file) => {
        filesBody.appendChild(createFileRow(file))
    })
}

function getCurrentFolderItems() {
    const currentFolder = mockTodosArquivosData.folders[navigationState.currentFolderId]
    if (!currentFolder) return []
    
    // Filtra arquivos excluídos se showDeletedFiles estiver false
    if (navigationState.showDeletedFiles) {
        return currentFolder.items
    } else {
        return currentFolder.items.filter(item => !item.isDeleted)
    }
}

function navigateToFolder(folderId) {
    if (!mockTodosArquivosData.folders[folderId]) {
        console.error('Pasta não encontrada:', folderId)
        return
    }

    const folder = mockTodosArquivosData.folders[folderId]

    // Atualiza o estado de navegação
    if (folderId === 'root') {
        navigationState.currentFolderId = 'root'
        navigationState.breadcrumb = []
    } else {
        navigationState.currentFolderId = folderId
        
        // Reconstrói o breadcrumb baseado no ID da pasta
        navigationState.breadcrumb = []
        
        // Exemplo: se folderId = 'folder-teste-teste', breadcrumb = ['folder-teste', 'folder-teste-teste']
        // Para simplificar, vamos manter uma lista apenas das pastas visitadas
        if (!navigationState.breadcrumb.includes(folderId)) {
            // Limpa o breadcrumb se estamos navegando para uma nova pasta raiz
            if (folderId.split('-').length === 2) { // folder-teste
                navigationState.breadcrumb = [folderId]
            } else if (folderId.includes('folder-teste-teste')) {
                navigationState.breadcrumb = ['folder-teste', 'folder-teste-teste']
            }
        }
    }

    // Limpa seleções
    selectedFiles.clear()
    
    // Reset do estado de arquivos excluídos
    navigationState.showDeletedFiles = false
    
    // Atualiza a view
    updatePageView()
    renderBreadcrumb()
    renderFilesList(getFilteredFiles())
    updateSelectionModeUI()
}

function renderBreadcrumb() {
    const breadcrumbContainer = document.getElementById('breadcrumb-container')
    const folderTitle = document.getElementById('folder-title')
    
    if (!breadcrumbContainer || !folderTitle) return

    const isRoot = navigationState.currentFolderId === 'root'

    if (isRoot) {
        breadcrumbContainer.innerHTML = ''
        folderTitle.textContent = ''
        return
    }

    // Constrói o breadcrumb
    const breadcrumbItems = ['root', ...navigationState.breadcrumb]
    const breadcrumbHTML = breadcrumbItems.map((folderId, index) => {
        const folder = mockTodosArquivosData.folders[folderId]
        const isLast = index === breadcrumbItems.length - 1
        
        if (isLast) {
            return `<span class="breadcrumb__item">${folder.name}</span>`
        } else {
            return `
                <span class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" data-folder-id="${folderId}">${folder.name}</a>
                    <span class="breadcrumb__separator">/</span>
                </span>
            `
        }
    }).join('')

    breadcrumbContainer.innerHTML = breadcrumbHTML

    // Atualiza o título da pasta
    const currentFolder = mockTodosArquivosData.folders[navigationState.currentFolderId]
    folderTitle.textContent = currentFolder.name

    // Adiciona event listeners aos links do breadcrumb
    breadcrumbContainer.querySelectorAll('.breadcrumb__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const folderId = e.target.getAttribute('data-folder-id')
            navigateToFolder(folderId)
        })
    })
    
    // Torna o título editável
    makeEditableTitle()
    
    // Configura o menu de configurações da pasta
    setupFolderSettingsMenu()
}

function makeEditableTitle() {
    const folderTitle = document.getElementById('folder-title')
    if (!folderTitle) return
    
    // Remove event listener anterior se existir
    const newTitle = folderTitle.cloneNode(true)
    folderTitle.parentNode.replaceChild(newTitle, folderTitle)
    
    const titleElement = document.getElementById('folder-title')
    
    titleElement.addEventListener('click', function() {
        if (titleElement.querySelector('input')) return // Já está editando
        
        const currentName = titleElement.textContent
        
        // Cria input para edição
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentName
        input.className = 'page__folder-title-input'
        
        // Limpa o título e adiciona o input
        titleElement.textContent = ''
        titleElement.appendChild(input)
        
        // Foca no input e seleciona o texto
        input.focus()
        input.select()
        
        // Função para salvar o nome
        function saveName() {
            const newName = input.value.trim()
            
            if (newName && newName !== currentName) {
                // Atualiza o nome nos dados mockados
                const currentFolder = mockTodosArquivosData.folders[navigationState.currentFolderId]
                if (currentFolder) {
                    currentFolder.name = newName
                }
            }
            
            // Restaura o título (com o nome atualizado ou original)
            const folderToDisplay = mockTodosArquivosData.folders[navigationState.currentFolderId]
            titleElement.textContent = folderToDisplay ? folderToDisplay.name : currentName
            
            // Re-renderiza o breadcrumb para atualizar o nome lá também
            renderBreadcrumb()
        }
        
        // Salva ao clicar fora (blur)
        input.addEventListener('blur', saveName)
        
        // Salva ao pressionar Enter
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                input.blur()
            } else if (e.key === 'Escape') {
                titleElement.textContent = currentName
                renderBreadcrumb()
            }
        })
    })
}

function setupFolderSettingsMenu() {
    const settingsBtn = document.getElementById('folder-settings-btn')
    const settingsMenu = document.getElementById('folder-settings-menu')
    const menuTitle = document.getElementById('folder-settings-menu-title')
    
    if (!settingsBtn || !settingsMenu) return
    
    // Atualiza o título do menu com o nome da pasta atual
    const currentFolder = mockTodosArquivosData.folders[navigationState.currentFolderId]
    if (currentFolder && menuTitle) {
        menuTitle.textContent = currentFolder.name
    }
    
    // Remove event listeners anteriores
    const newBtn = settingsBtn.cloneNode(true)
    settingsBtn.parentNode.replaceChild(newBtn, settingsBtn)
    
    const btn = document.getElementById('folder-settings-btn')
    const menu = document.getElementById('folder-settings-menu')
    
    // Toggle menu ao clicar no botão
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        menu.classList.toggle('is-hidden')
    })
    
    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.add('is-hidden')
        }
    })
    
    // Handler para toggle de arquivos excluídos
    const toggleDeletedBtn = document.getElementById('toggle-deleted-files')
    const toggleDeletedText = document.getElementById('toggle-deleted-text')
    const toggleDeletedIcon = toggleDeletedBtn ? toggleDeletedBtn.querySelector('i') : null
    
    // Atualiza o texto e ícone baseado no estado atual
    function updateDeletedFilesToggle() {
        if (!toggleDeletedText || !toggleDeletedIcon) return
        
        if (navigationState.showDeletedFiles) {
            toggleDeletedText.textContent = 'Ocultar arquivos excluídos'
            toggleDeletedIcon.className = 'bx bx-hide'
        } else {
            toggleDeletedText.textContent = 'Mostrar arquivos excluídos'
            toggleDeletedIcon.className = 'bx bx-show'
        }
    }
    
    // Inicializa o estado do toggle
    updateDeletedFilesToggle()
    
    if (toggleDeletedBtn) {
        toggleDeletedBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            
            // Alterna o estado
            navigationState.showDeletedFiles = !navigationState.showDeletedFiles
            
            // Atualiza o texto e ícone
            updateDeletedFilesToggle()
            
            // Re-renderiza a lista de arquivos
            renderFilesList(getFilteredFiles())
            
            // Fecha o menu principal
            menu.classList.add('is-hidden')
        })
    }
    
    // Adiciona ação ao item "Renomear"
    const menuItems = menu.querySelectorAll('.folder-settings-menu__item')
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const text = item.querySelector('span').textContent
            
            if (text === 'Renomear') {
                menu.classList.add('is-hidden')
                const folderTitle = document.getElementById('folder-title')
                if (folderTitle) {
                    folderTitle.click()
                }
            }
            
            // Outras ações podem ser adicionadas aqui
            console.log('Item clicado:', text)
        })
    })
}

function updatePageView() {
    const isRoot = navigationState.currentFolderId === 'root'
    
    const rootToolbar = document.getElementById('root-toolbar')
    const folderNavigation = document.getElementById('folder-navigation')
    const filtersSection = document.querySelector('.filters')
    const quickFilters = document.querySelector('.files-quick-filters')

    if (rootToolbar) {
        rootToolbar.classList.toggle('is-hidden', !isRoot)
    }

    if (folderNavigation) {
        folderNavigation.classList.toggle('is-hidden', isRoot)
    }

    if (filtersSection) {
        filtersSection.classList.toggle('is-hidden', !isRoot)
    }

    if (quickFilters && !selectedFiles.size) {
        quickFilters.classList.toggle('is-hidden', !isRoot)
    }
}

function getFilteredFiles() {
    const searchInput = document.getElementById('files-search')
    const accessFilter = document.getElementById('filter-access')
    const typeFilter = document.getElementById('filter-type')
    const locationFilter = document.getElementById('filter-location')

    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : ''
    const accessValue = accessFilter ? accessFilter.value : ''
    const typeValue = typeFilter ? typeFilter.value : ''
    const locationValue = locationFilter ? locationFilter.value : ''
    const recentEnabled = quickFiltersState.recent
    const favoritesEnabled = quickFiltersState.favorites

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return getCurrentFolderItems().filter((file) => {
        const matchesSearch = !searchValue || file.name.toLowerCase().includes(searchValue)
        const matchesAccess = !accessValue || file.access === accessValue
        const matchesType = !typeValue || file.fileType === typeValue
        const matchesLocation = !locationValue || file.location === locationValue
        const matchesRecent = !recentEnabled || file.isRecent
        const matchesFavorites = !favoritesEnabled || file.isFavorite

        let matchesDate = true
        if (dateFilterState.mode === 'Hoje') {
            const fileDate = new Date(file.modifiedDate)
            fileDate.setHours(0, 0, 0, 0)
            matchesDate = fileDate.getTime() === today.getTime()
        } else if (dateFilterState.mode === 'Últimos 7 dias') {
            const sevenDaysAgo = new Date(today)
            sevenDaysAgo.setDate(today.getDate() - 7)
            matchesDate = file.modifiedDate >= sevenDaysAgo
        } else if (dateFilterState.mode === 'Últimos 30 dias') {
            const thirtyDaysAgo = new Date(today)
            thirtyDaysAgo.setDate(today.getDate() - 30)
            matchesDate = file.modifiedDate >= thirtyDaysAgo
        } else if (dateFilterState.mode === 'custom' && (dateFilterState.customFrom || dateFilterState.customTo)) {
            if (dateFilterState.customFrom && dateFilterState.customTo) {
                matchesDate = file.modifiedDate >= dateFilterState.customFrom && file.modifiedDate <= dateFilterState.customTo
            } else if (dateFilterState.customFrom) {
                matchesDate = file.modifiedDate >= dateFilterState.customFrom
            } else if (dateFilterState.customTo) {
                matchesDate = file.modifiedDate <= dateFilterState.customTo
            }
        }

        return matchesSearch && matchesAccess && matchesType && matchesLocation && matchesRecent && matchesFavorites && matchesDate
    })
}

function updateQuickFilterButtons() {
    const recentButton = document.getElementById('filter-recent')
    const favoritesButton = document.getElementById('filter-favorites')

    if (recentButton) {
        recentButton.classList.toggle('is-active', quickFiltersState.recent)
        recentButton.setAttribute('aria-pressed', String(quickFiltersState.recent))
    }

    if (favoritesButton) {
        favoritesButton.classList.toggle('is-active', quickFiltersState.favorites)
        favoritesButton.setAttribute('aria-pressed', String(quickFiltersState.favorites))
    }
}

function initTodosArquivosMocks() {
    const searchInput = document.getElementById('files-search')
    const accessFilter = document.getElementById('filter-access')
    const typeFilter = document.getElementById('filter-type')
    const locationFilter = document.getElementById('filter-location')
    const modifiedFilter = document.getElementById('filter-modified')
    const dateRangePicker = document.getElementById('date-range-picker')
    const dateFrom = document.getElementById('date-from')
    const dateTo = document.getElementById('date-to')
    const dateRangeCancel = document.getElementById('date-range-cancel')
    const dateRangeApply = document.getElementById('date-range-apply')
    const recentButton = document.getElementById('filter-recent')
    const favoritesButton = document.getElementById('filter-favorites')
    const filesBody = document.getElementById('files-list-body')

    renderSelectOptions(accessFilter, 'Acesso', mockTodosArquivosData.accessOptions)
    renderSelectOptions(typeFilter, 'Tipo', mockTodosArquivosData.typeOptions)
    renderSelectOptions(locationFilter, 'Local', mockTodosArquivosData.locationOptions)
    renderSelectOptions(modifiedFilter, 'Modificado', mockTodosArquivosData.modifiedOptions)
    
    updatePageView()
    renderFilesList(getFilteredFiles())
    updateQuickFilterButtons()
    updateSelectionModeUI()

    ;[searchInput, accessFilter, typeFilter, locationFilter].forEach((element) => {
        if (!element) {
            return
        }

        element.addEventListener('input', () => {
            renderFilesList(getFilteredFiles())
        })

        element.addEventListener('change', () => {
            renderFilesList(getFilteredFiles())
        })
    })

    if (modifiedFilter) {
        modifiedFilter.addEventListener('change', (event) => {
            const value = event.target.value

            if (value === 'Personalizado') {
                if (dateRangePicker) {
                    dateRangePicker.classList.remove('is-hidden')
                }
            } else {
                if (dateRangePicker) {
                    dateRangePicker.classList.add('is-hidden')
                }
                dateFilterState.mode = value
                dateFilterState.customFrom = null
                dateFilterState.customTo = null
                renderFilesList(getFilteredFiles())
            }
        })
    }

    if (dateRangeCancel) {
        dateRangeCancel.addEventListener('click', () => {
            if (dateRangePicker) {
                dateRangePicker.classList.add('is-hidden')
            }
            if (modifiedFilter) {
                modifiedFilter.value = ''
            }
            if (dateFrom) {
                dateFrom.value = ''
            }
            if (dateTo) {
                dateTo.value = ''
            }
            dateFilterState.mode = ''
            dateFilterState.customFrom = null
            dateFilterState.customTo = null
            renderFilesList(getFilteredFiles())
        })
    }

    if (dateRangeApply) {
        dateRangeApply.addEventListener('click', () => {
            const fromValue = dateFrom ? dateFrom.value : ''
            const toValue = dateTo ? dateTo.value : ''

            dateFilterState.mode = 'custom'
            dateFilterState.customFrom = fromValue ? new Date(fromValue) : null
            dateFilterState.customTo = toValue ? new Date(toValue) : null

            if (dateRangePicker) {
                dateRangePicker.classList.add('is-hidden')
            }

            renderFilesList(getFilteredFiles())
        })
    }

    if (recentButton) {
        recentButton.addEventListener('click', () => {
            quickFiltersState.recent = !quickFiltersState.recent
            updateQuickFilterButtons()
            renderFilesList(getFilteredFiles())
        })
    }

    if (favoritesButton) {
        favoritesButton.addEventListener('click', () => {
            quickFiltersState.favorites = !quickFiltersState.favorites
            updateQuickFilterButtons()
            renderFilesList(getFilteredFiles())
        })
    }

    if (filesBody) {
        filesBody.addEventListener('change', (event) => {
            const checkbox = event.target.closest('.files-list__checkbox')
            if (!checkbox) {
                return
            }

            const fileId = checkbox.dataset.fileId
            if (!fileId) {
                return
            }

            if (checkbox.checked) {
                selectedFiles.add(fileId)
            } else {
                selectedFiles.delete(fileId)
            }

            updateSelectionModeUI()
        })
    }

    const masterCheckbox = document.getElementById('select-all-files')
    if (masterCheckbox) {
        masterCheckbox.addEventListener('change', (event) => {
            const isChecked = event.target.checked
            const currentItems = getCurrentFolderItems()

            if (isChecked) {
                // Seleciona apenas itens não excluídos
                currentItems.forEach((file) => {
                    if (!file.isDeleted) {
                        selectedFiles.add(file.id)
                    }
                })
            } else {
                selectedFiles.clear()
            }

            // Atualiza os checkboxes individuais visualmente
            const allCheckboxes = document.querySelectorAll('.files-list__checkbox[data-file-id]')
            allCheckboxes.forEach((checkbox) => {
                const fileId = checkbox.dataset.fileId
                checkbox.checked = selectedFiles.has(fileId)
            })

            updateSelectionModeUI()
        })
    }
}

function createPanelItem(item) {
    const link = document.createElement('a')
    link.href = '#'
    link.className = 'nav__panel-item'
    if (item.view) {
        link.dataset.view = item.view
    }
    if (item.active) {
        link.classList.add('is-active')
    }

    const icon = document.createElement('i')
    icon.className = `bx ${item.icon}`
    const label = document.createElement('span')
    label.textContent = item.label

    link.appendChild(icon)
    link.appendChild(label)
    return link
}

function showPage(viewKey) {
    const pages = document.querySelectorAll('.page')
    if (!pages.length) {
        return
    }

    pages.forEach((page) => {
        page.classList.toggle('is-active', page.dataset.view === viewKey)
    })
}

function renderPanel(key) {
    if (!navPanel || !panelData[key]) {
        return
    }

    navPanel.innerHTML = ''

    const header = document.createElement('div')
    header.className = 'nav__panel-header'
    header.textContent = panelData[key].title
    navPanel.appendChild(header)

    panelData[key].sections.forEach((section) => {
        if (section.title) {
            const title = document.createElement('div')
            title.className = 'nav__panel-title'
            title.textContent = section.title
            navPanel.appendChild(title)
        }

        const list = document.createElement('div')
        list.className = 'nav__panel-list'
        section.items.forEach((item) => {
            list.appendChild(createPanelItem(item))
        })
        navPanel.appendChild(list)
    })
}

function colorLink(event){
    const panelKey = this.dataset.panel
    if (panelKey) {
        event.preventDefault()
    }
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
    if (panelKey) {
        renderPanel(panelKey)
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

if (navPanel) {
    navPanel.addEventListener('click', (event) => {
        const panelItem = event.target.closest('.nav__panel-item')
        if (!panelItem) {
            return
        }

        event.preventDefault()
        navPanel.querySelectorAll('.nav__panel-item').forEach((item) => item.classList.remove('is-active'))
        panelItem.classList.add('is-active')

        const viewKey = panelItem.dataset.view
        if (viewKey) {
            showPage(viewKey)
            closeMobileNavMenu()
        }
    })
}

const initial = document.querySelector('.nav__link.active[data-panel]')
if (initial) {
    renderPanel(initial.dataset.panel)
    showPage('todos-arquivos')
}

initTodosArquivosMocks()

/*==================== MODAL NOVA PASTA ====================*/
function setupNewFolderModal() {
    const modal = document.getElementById('new-folder-modal')
    const modalInput = document.getElementById('new-folder-input')
    const btnNavigation = document.getElementById('new-folder-btn-nav')
    const btnRoot = document.getElementById('new-folder-btn-root')
    const btnCancel = document.getElementById('cancel-folder-btn')
    const btnCreate = document.getElementById('create-folder-btn')

    if (!modal || !modalInput) return

    // Abre o modal
    function openModal() {
        modal.classList.remove('is-hidden')
        modalInput.value = ''
        modalInput.focus()
    }

    // Fecha o modal
    function closeModal() {
        modal.classList.add('is-hidden')
        modalInput.value = ''
    }

    // Cria a nova pasta
    function createFolder() {
        const folderName = modalInput.value.trim() || 'Pasta sem nome'
        const currentFolderId = navigationState.currentFolderId
        const currentFolder = mockTodosArquivosData.folders[currentFolderId]

        if (!currentFolder) return

        // Gera um ID único para a nova pasta
        const newFolderId = 'folder-' + Date.now()
        
        // Cria o objeto da nova pasta
        const newFolder = {
            id: newFolderId,
            type: 'folder',
            name: folderName,
            lastModified: 'Criado em • ' + new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
            size: '0 KB',
            itemCount: 0,
            access: 'Público',
            location: currentFolderId === 'root' ? 'O meu disco' : 'Área compartilhada',
            fileType: 'Pasta',
            modifiedDate: new Date(),
            isRecent: true,
            isFavorite: false,
            isDeleted: false
        }

        // Adiciona a nova pasta à lista de itens da pasta atual
        currentFolder.items.unshift(newFolder)

        // Cria uma entrada vazia para a nova pasta no objeto folders
        mockTodosArquivosData.folders[newFolderId] = {
            id: newFolderId,
            name: folderName,
            items: []
        }

        // Atualiza a lista de arquivos
        renderFilesList(getCurrentFolderItems())
        
        // Fecha o modal
        closeModal()
    }

    // Event listeners para os botões
    if (btnNavigation) {
        btnNavigation.addEventListener('click', openModal)
    }

    if (btnRoot) {
        btnRoot.addEventListener('click', openModal)
    }

    if (btnCancel) {
        btnCancel.addEventListener('click', closeModal)
    }

    if (btnCreate) {
        btnCreate.addEventListener('click', createFolder)
    }

    // Fecha o modal ao clicar fora dele
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })

    // Cria a pasta ao pressionar Enter
    modalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            createFolder()
        } else if (e.key === 'Escape') {
            closeModal()
        }
    })
}

setupNewFolderModal()

/*==================== FLUXO DE TRABALHO ====================*/
const workflowDefaultFlow = [
    { id: 1, nome: 'Solicitação / Início' },
    { id: 2, nome: 'Elaboração / Edição' },
    { id: 3, nome: 'Revisão Técnica / Validação' },
    { id: 4, nome: 'Revisão Jurídica' },
    { id: 5, nome: 'Aprovação Orçamentária' },
    { id: 6, nome: 'Aprovação Gerencial' },
    { id: 7, nome: 'Negociação / Ajustes' },
    { id: 8, nome: 'Assinatura Digital' },
    { id: 9, nome: 'Execução / Publicação' }
]

const workflowModels = {
    'prestacao-servicos': { skip: [] },
    franquia: { skip: [], extra: [{ pos: 2.1, nome: 'Due Diligence + COF' }] },
    nda: { skip: [3, 5, 7] },
    collab: { skip: [5] },
    comodato: { skip: [7] },
    'dist-internacional': { skip: [], extra: [{ pos: 2.1, nome: 'Due Diligence Internacional' }] },
    empreitada: { skip: [] },
    fornecimento: { skip: [7] },
    'franquia-internacional': { skip: [], extra: [{ pos: 2.1, nome: 'Due Diligence Internacional' }] },
    aditamento: { skip: [1, 3, 7] },
    'compra-venda-equip': { skip: [] },
    'locacao-equip': { skip: [] },
    'locacao-imovel': { skip: [], extra: [{ pos: 2.1, nome: 'Vistoria' }] },
    distrato: { skip: [1, 2, 3, 5, 7] },
    rescisao: { skip: [1, 2, 3, 5, 7] },
    'representacao-comercial': { skip: [] },
    transporte: { skip: [4, 5] },
    cessao: { skip: [3, 5, 7] },
    influencers: { skip: [5] }
}

const workflowClauseCatalog = [
    {
        id: 'partes',
        title: 'Qualificação das partes',
        requiresForm: true,
        fields: [
            { name: 'contratante', label: 'Contratante', type: 'text', placeholder: 'Empresa contratante' },
            { name: 'contratada', label: 'Contratada', type: 'text', placeholder: 'Empresa contratada' },
            { name: 'representante', label: 'Representante legal', type: 'text', placeholder: 'Nome completo' }
        ]
    },
    {
        id: 'objeto-servico',
        title: 'Objeto do contrato / tipo de serviço',
        requiresForm: true,
        fields: [
            { name: 'tipoServico', label: 'Tipo de serviço', type: 'text', placeholder: 'Ex: Consultoria técnica' },
            { name: 'descricao', label: 'Descrição resumida', type: 'textarea', placeholder: 'Escopo principal do serviço' }
        ]
    },
    {
        id: 'enderecos',
        title: 'Endereços e dados de contato',
        requiresForm: true,
        fields: [
            { name: 'enderecoContratante', label: 'Endereço contratante', type: 'text', placeholder: 'Rua, número, cidade' },
            { name: 'enderecoContratada', label: 'Endereço contratada', type: 'text', placeholder: 'Rua, número, cidade' }
        ]
    },
    {
        id: 'vigencia',
        title: 'Prazo de vigência e renovação',
        requiresForm: true,
        fields: [
            { name: 'inicio', label: 'Início da vigência', type: 'date' },
            { name: 'fim', label: 'Fim da vigência', type: 'date' },
            { name: 'renovacao', label: 'Renovação automática', type: 'select', options: ['Sim', 'Não'] }
        ]
    },
    {
        id: 'confidencialidade',
        title: 'Confidencialidade e sigilo',
        requiresForm: false,
        fields: []
    },
    {
        id: 'assinatura',
        title: 'Assinatura digital',
        requiresForm: false,
        fields: []
    }
]

const workflowModelDefaultClauses = {
    'prestacao-servicos': ['partes', 'objeto-servico', 'enderecos', 'vigencia', 'confidencialidade', 'assinatura'],
    nda: ['partes', 'confidencialidade', 'assinatura'],
    franquia: ['partes', 'objeto-servico', 'enderecos', 'vigencia', 'confidencialidade', 'assinatura'],
    'locacao-imovel': ['partes', 'enderecos', 'vigencia', 'assinatura']
}

const workflowMockSeed = {
    documentsByModel: {
        'prestacao-servicos': [
            {
                id: 'doc-mock-ps-001',
                nome: 'Contrato Prestação • ACME',
                currentStep: 2,
                updatedAt: '2026-02-21T10:00:00.000Z'
            }
        ],
        nda: [
            {
                id: 'doc-mock-nda-001',
                nome: 'NDA • Projeto Orion',
                currentStep: 4,
                updatedAt: '2026-02-20T14:15:00.000Z'
            }
        ]
    },
    savedFlows: [
        {
            id: 'saved-flow-mock-001',
            model: 'prestacao-servicos',
            name: 'Fluxo padrão Prestação (Mock)',
            createdAt: '2026-02-18T09:00:00.000Z',
            stages: [
                { id: 1, nome: 'Solicitação / Início' },
                { id: 2, nome: 'Elaboração / Edição' },
                { id: 3, nome: 'Revisão Técnica / Validação' },
                { id: 4, nome: 'Revisão Jurídica' },
                { id: 5, nome: 'Aprovação Orçamentária' },
                { id: 6, nome: 'Aprovação Gerencial' },
                { id: 7, nome: 'Negociação / Ajustes' },
                { id: 8, nome: 'Assinatura Digital' },
                { id: 9, nome: 'Execução / Publicação' }
            ],
            customExtras: [],
            clauses: [
                { clauseId: 'partes', values: {} },
                { clauseId: 'objeto-servico', values: {} },
                { clauseId: 'assinatura', values: {} }
            ]
        }
    ]
}

const workflowState = {
    currentModel: 'prestacao-servicos',
    focusStep: null,
    focusOnlyMine: true,
    customExtrasByModel: {},
    documentsByModel: {},
    selectedClausesByModel: {},
    activeClauseByModel: {},
    clauseFormEnabledByModel: {},
    clauseFormNoticeByModel: {},
    savedFlows: []
}

const workflowStorageKey = 'ged.workflow.savedFlows.v1'

const workflowMockService = {
    loadSavedFlows() {
        try {
            const rawValue = localStorage.getItem(workflowStorageKey)
            if (!rawValue) {
                return workflowMockSeed.savedFlows.map((flow) => ({ ...flow }))
            }

            const parsed = JSON.parse(rawValue)
            return Array.isArray(parsed) ? parsed : []
        } catch (error) {
            return workflowMockSeed.savedFlows.map((flow) => ({ ...flow }))
        }
    },
    saveSavedFlows(savedFlows) {
        localStorage.setItem(workflowStorageKey, JSON.stringify(savedFlows))
    },
    loadInitialDocuments(modelKey) {
        const documents = workflowMockSeed.documentsByModel[modelKey] || []
        return documents.map((doc) => ({
            ...doc,
            updatedAt: doc.updatedAt ? new Date(doc.updatedAt) : new Date()
        }))
    }
}

const workflowRefs = {
    modelSelect: null,
    myStepSelect: null,
    focusMode: null,
    board: null,
    library: null,
    selectedClauses: null,
    clauseForm: null,
    documentPreview: null,
    addExtraButton: null,
    addDocumentButton: null,
    saveFlowButton: null,
    savedList: null
}

function formatWorkflowModelLabel(modelKey) {
    return modelKey
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')
}

function formatStageNumber(value) {
    return String(value).replace('.', ',')
}

function getWorkflowStagesForModel(modelKey) {
    const config = workflowModels[modelKey] || { skip: [] }
    const skipList = config.skip || []
    const baseStages = workflowDefaultFlow
        .filter((stage) => !skipList.includes(Math.floor(stage.id)))
        .map((stage) => ({ id: Number(stage.id), nome: stage.nome }))

    const staticExtras = (config.extra || []).map((extra) => ({ id: Number(extra.pos), nome: extra.nome }))
    const customExtras = (workflowState.customExtrasByModel[modelKey] || []).map((extra) => ({ id: Number(extra.pos), nome: extra.nome }))

    const stages = [...baseStages, ...staticExtras, ...customExtras]
        .filter((stage) => Number.isFinite(stage.id))
        .sort((a, b) => a.id - b.id)

    return stages
}

function getWorkflowCurrentStages() {
    return getWorkflowStagesForModel(workflowState.currentModel)
}

function ensureWorkflowModelState(modelKey) {
    if (!workflowState.customExtrasByModel[modelKey]) {
        workflowState.customExtrasByModel[modelKey] = []
    }

    if (!workflowState.documentsByModel[modelKey]) {
        const seededDocuments = workflowMockService.loadInitialDocuments(modelKey)
        if (seededDocuments.length) {
            workflowState.documentsByModel[modelKey] = seededDocuments
        } else {
            const firstStage = getWorkflowStagesForModel(modelKey)[0]
            workflowState.documentsByModel[modelKey] = firstStage ? [
                {
                    id: `doc-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                    nome: `${formatWorkflowModelLabel(modelKey)} • Documento inicial`,
                    currentStep: firstStage.id,
                    updatedAt: new Date()
                }
            ] : []
        }
    }

    if (!workflowState.selectedClausesByModel[modelKey]) {
        const defaults = workflowModelDefaultClauses[modelKey] || ['partes', 'assinatura']
        workflowState.selectedClausesByModel[modelKey] = defaults
            .map((clauseId) => {
                const clause = workflowClauseCatalog.find((item) => item.id === clauseId)
                if (!clause) return null
                return {
                    clauseId,
                    values: {}
                }
            })
            .filter(Boolean)
    }

    if (!workflowState.activeClauseByModel[modelKey]) {
        workflowState.activeClauseByModel[modelKey] = workflowState.selectedClausesByModel[modelKey][0]?.clauseId || null
    }

    if (typeof workflowState.clauseFormEnabledByModel[modelKey] !== 'boolean') {
        workflowState.clauseFormEnabledByModel[modelKey] = false
    }

    if (typeof workflowState.clauseFormNoticeByModel[modelKey] !== 'string') {
        workflowState.clauseFormNoticeByModel[modelKey] = ''
    }
}

function setWorkflowClauseFormEnabled(enabled) {
    workflowState.clauseFormEnabledByModel[workflowState.currentModel] = Boolean(enabled)
}

function setWorkflowClauseFormNotice(message) {
    workflowState.clauseFormNoticeByModel[workflowState.currentModel] = String(message || '')
}

function getWorkflowCurrentDocuments() {
    return workflowState.documentsByModel[workflowState.currentModel] || []
}

function renderWorkflowModelOptions() {
    const select = workflowRefs.modelSelect
    if (!select) return

    select.innerHTML = ''
    Object.keys(workflowModels).forEach((modelKey) => {
        const option = document.createElement('option')
        option.value = modelKey
        option.textContent = formatWorkflowModelLabel(modelKey)
        if (modelKey === workflowState.currentModel) {
            option.selected = true
        }
        select.appendChild(option)
    })
}

function renderWorkflowStepOptions() {
    const select = workflowRefs.myStepSelect
    if (!select) return

    const stages = getWorkflowCurrentStages()
    if (!stages.length) {
        select.innerHTML = ''
        workflowState.focusStep = null
        return
    }

    if (!stages.some((stage) => stage.id === workflowState.focusStep)) {
        workflowState.focusStep = stages[0].id
    }

    select.innerHTML = ''
    stages.forEach((stage) => {
        const option = document.createElement('option')
        option.value = String(stage.id)
        option.textContent = `${formatStageNumber(stage.id)} - ${stage.nome}`
        option.selected = stage.id === workflowState.focusStep
        select.appendChild(option)
    })
}

function moveWorkflowDocumentForward(documentId) {
    const documents = getWorkflowCurrentDocuments()
    const stages = getWorkflowCurrentStages()
    const documentItem = documents.find((item) => item.id === documentId)

    if (!documentItem || !stages.length) {
        return
    }

    const currentIndex = stages.findIndex((stage) => stage.id === documentItem.currentStep)
    if (currentIndex === -1) {
        documentItem.currentStep = stages[0].id
        documentItem.updatedAt = new Date()
        return
    }

    const nextStage = stages[currentIndex + 1]
    if (nextStage) {
        documentItem.currentStep = nextStage.id
        documentItem.updatedAt = new Date()
    }
}

function renderWorkflowBoard() {
    const board = workflowRefs.board
    if (!board) return

    const stages = getWorkflowCurrentStages()
    const documents = getWorkflowCurrentDocuments()

    let visibleStages = stages
    if (workflowState.focusOnlyMine && workflowState.focusStep !== null) {
        visibleStages = stages.filter((stage) => stage.id === workflowState.focusStep)
    }

    board.innerHTML = ''

    visibleStages.forEach((stage) => {
        const stageDocuments = documents.filter((doc) => doc.currentStep === stage.id)
        const stageIndex = stages.findIndex((item) => item.id === stage.id)

        const box = document.createElement('article')
        box.className = 'workflow__box'
        if (stage.id === workflowState.focusStep) {
            box.classList.add('is-current')
        }

        const docsMarkup = stageDocuments.length
            ? stageDocuments.map((doc) => {
                const nextStage = stages[stageIndex + 1]
                const moveLabel = nextStage ? `Mover para ${formatStageNumber(nextStage.id)}` : 'Armazenado'
                const updatedAt = doc.updatedAt instanceof Date ? doc.updatedAt.toLocaleDateString('pt-BR') : '-'

                return `
                    <div class="workflow__doc">
                        <p class="workflow__doc-name">${doc.nome}</p>
                        <p class="workflow__doc-meta">Última atualização: ${updatedAt}</p>
                        <button class="workflow__doc-move" data-move-doc="${doc.id}" ${nextStage ? '' : 'disabled'}>${moveLabel}</button>
                    </div>
                `
            }).join('')
            : '<p class="workflow__box-empty">Nenhum documento nesta caixa.</p>'

        box.innerHTML = `
            <div class="workflow__box-header">
                <div>
                    <div class="workflow__box-id">Caixa ${formatStageNumber(stage.id)}</div>
                    <h3 class="workflow__box-name">${stage.nome}</h3>
                </div>
                <span class="workflow__box-counter">${stageDocuments.length}</span>
            </div>
            <div class="workflow__docs">${docsMarkup}</div>
        `

        board.appendChild(box)
    })
}

function getCurrentModelSelectedClauses() {
    return workflowState.selectedClausesByModel[workflowState.currentModel] || []
}

function renderWorkflowClauseLibrary() {
    const library = workflowRefs.library
    if (!library) return

    const selected = new Set(getCurrentModelSelectedClauses().map((item) => item.clauseId))
    library.innerHTML = ''

    workflowClauseCatalog.forEach((clause) => {
        const item = document.createElement('div')
        item.className = 'workflow__clause-item'

        const isSelected = selected.has(clause.id)
        item.innerHTML = `
            <p class="workflow__clause-item-title">${clause.title}</p>
            <div class="workflow__clause-actions">
                <button type="button" class="workflow__small-btn" data-add-clause="${clause.id}" ${isSelected ? 'disabled' : ''}>${isSelected ? 'Adicionada' : 'Adicionar'}</button>
            </div>
        `

        library.appendChild(item)
    })
}

function renderWorkflowSelectedClauses() {
    const container = workflowRefs.selectedClauses
    if (!container) return

    const activeClauseId = workflowState.activeClauseByModel[workflowState.currentModel]
    const isFormEnabled = Boolean(workflowState.clauseFormEnabledByModel[workflowState.currentModel])
    const selectedClauses = getCurrentModelSelectedClauses()
    if (!selectedClauses.length) {
        container.innerHTML = '<p class="workflow__hint">Nenhuma cláusula selecionada para este modelo.</p>'
        return
    }

    container.innerHTML = selectedClauses.map((selectedClause) => {
        const clause = workflowClauseCatalog.find((item) => item.id === selectedClause.clauseId)
        if (!clause) return ''
        const isActive = isFormEnabled && clause.id === activeClauseId
        const editButtonClass = `workflow__small-btn${isActive ? ' workflow__small-btn--active' : ''}`
        const editButtonLabel = isActive ? 'Preenchendo dados' : 'Preencher dados'

        return `
            <div class="workflow__clause-item">
                <p class="workflow__clause-item-title">${clause.title}</p>
                <div class="workflow__clause-actions">
                    <button type="button" class="${editButtonClass}" data-edit-clause="${clause.id}">${editButtonLabel}</button>
                    <button type="button" class="workflow__small-btn" data-remove-clause="${clause.id}">Remover</button>
                </div>
            </div>
        `
    }).join('')
}

function renderWorkflowClauseForm() {
    const formContainer = workflowRefs.clauseForm
    if (!formContainer) return

    const isEnabled = Boolean(workflowState.clauseFormEnabledByModel[workflowState.currentModel])
    if (!isEnabled) {
        formContainer.classList.add('workflow__form--disabled')
        const notice = workflowState.clauseFormNoticeByModel[workflowState.currentModel] || 'Formulário desativado. Clique em "Preencher dados" para habilitar a edição da cláusula.'
        formContainer.innerHTML = `<p class="workflow__hint">${notice}</p>`
        return
    }

    formContainer.classList.remove('workflow__form--disabled')

    const activeClauseId = workflowState.activeClauseByModel[workflowState.currentModel]
    const selectedClause = getCurrentModelSelectedClauses().find((item) => item.clauseId === activeClauseId)
    if (!selectedClause) {
        formContainer.innerHTML = '<p class="workflow__hint">Selecione uma cláusula para preencher os metadados.</p>'
        return
    }

    const clauseDefinition = workflowClauseCatalog.find((item) => item.id === selectedClause.clauseId)
    if (!clauseDefinition) {
        formContainer.innerHTML = ''
        return
    }

    if (!clauseDefinition.requiresForm || !clauseDefinition.fields.length) {
        formContainer.innerHTML = `
            <div class="workflow__form-row">
                <label>${clauseDefinition.title}</label>
                <p class="workflow__hint">Esta cláusula é padrão e não exige formulário. Basta mantê-la no modelo.</p>
            </div>
            <div class="workflow__form-actions">
                <button type="button" class="workflow__form-save" data-save-clause>Salvar dados da cláusula</button>
                <p class="workflow__form-status">Clique em salvar para concluir esta etapa.</p>
            </div>
        `
        return
    }

    const fieldsHtml = clauseDefinition.fields.map((field) => {
        const value = selectedClause.values[field.name] || ''

        if (field.type === 'textarea') {
            return `
                <div class="workflow__form-row">
                    <label for="clause-field-${field.name}">${field.label}</label>
                    <textarea id="clause-field-${field.name}" data-clause-field="${field.name}" placeholder="${field.placeholder || ''}">${value}</textarea>
                </div>
            `
        }

        if (field.type === 'select') {
            const options = (field.options || []).map((option) => `<option value="${option}" ${value === option ? 'selected' : ''}>${option}</option>`).join('')
            return `
                <div class="workflow__form-row">
                    <label for="clause-field-${field.name}">${field.label}</label>
                    <select id="clause-field-${field.name}" data-clause-field="${field.name}">
                        <option value="">Selecione</option>
                        ${options}
                    </select>
                </div>
            `
        }

        return `
            <div class="workflow__form-row">
                <label for="clause-field-${field.name}">${field.label}</label>
                <input id="clause-field-${field.name}" type="${field.type || 'text'}" data-clause-field="${field.name}" value="${value}" placeholder="${field.placeholder || ''}" />
            </div>
        `
    }).join('')

    formContainer.innerHTML = `
        <div class="workflow__form-row">
            <label>Cláusula ativa</label>
            <strong>${clauseDefinition.title}</strong>
        </div>
        ${fieldsHtml}
        <div class="workflow__form-actions">
            <button type="button" class="workflow__form-save" data-save-clause>Salvar dados da cláusula</button>
            <p class="workflow__form-status">Após salvar, você pode seguir para a próxima cláusula.</p>
        </div>
    `
}

function getWorkflowDefaultPreviewText(clauseId) {
    if (clauseId === 'confidencialidade') {
        return 'As partes se comprometem a manter sigilo sobre todas as informações confidenciais relacionadas a este contrato.'
    }

    if (clauseId === 'assinatura') {
        return 'As partes concordam com assinatura digital deste instrumento, com validade jurídica e integridade do documento.'
    }

    return 'Cláusula adicionada ao documento. Preencha os dados para detalhar este trecho.'
}

function renderWorkflowDocumentPreview() {
    const previewContainer = workflowRefs.documentPreview
    if (!previewContainer) return

    const selectedClauses = getCurrentModelSelectedClauses()
    if (!selectedClauses.length) {
        previewContainer.innerHTML = '<p class="workflow__preview-empty">Nenhuma cláusula selecionada para pré-visualização.</p>'
        return
    }

    const sections = selectedClauses.map((selectedClause) => {
        const clauseDefinition = workflowClauseCatalog.find((item) => item.id === selectedClause.clauseId)
        if (!clauseDefinition) return ''

        if (!clauseDefinition.requiresForm || !clauseDefinition.fields.length) {
            return `
                <div class="workflow__preview-section">
                    <strong>${clauseDefinition.title}</strong>
                    <p class="workflow__preview-line">${getWorkflowDefaultPreviewText(clauseDefinition.id)}</p>
                </div>
            `
        }

        const fieldLines = clauseDefinition.fields.map((field) => {
            const rawValue = selectedClause.values[field.name]
            const value = rawValue && String(rawValue).trim() ? String(rawValue).trim() : 'Nao informado'
            return `<p class="workflow__preview-line"><strong>${field.label}:</strong> ${value}</p>`
        }).join('')

        return `
            <div class="workflow__preview-section">
                <strong>${clauseDefinition.title}</strong>
                ${fieldLines}
            </div>
        `
    }).join('')

    previewContainer.innerHTML = `
        <p class="workflow__preview-title">Pré-visualização do documento</p>
        ${sections}
    `
}

function loadWorkflowSavedFlows() {
    workflowState.savedFlows = workflowMockService.loadSavedFlows()
}

function persistWorkflowSavedFlows() {
    workflowMockService.saveSavedFlows(workflowState.savedFlows)
}

function buildWorkflowSnapshot() {
    const modelKey = workflowState.currentModel
    const stages = getWorkflowStagesForModel(modelKey).map((stage) => ({ id: stage.id, nome: stage.nome }))
    const clauses = getCurrentModelSelectedClauses().map((item) => ({
        clauseId: item.clauseId,
        values: { ...item.values }
    }))
    const customExtras = (workflowState.customExtrasByModel[modelKey] || []).map((item) => ({ ...item }))

    return {
        id: `saved-flow-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        model: modelKey,
        name: '',
        createdAt: new Date().toISOString(),
        stages,
        customExtras,
        clauses
    }
}

function renderWorkflowSavedFlows() {
    const savedList = workflowRefs.savedList
    if (!savedList) return

    const modelSavedFlows = workflowState.savedFlows
        .filter((flow) => flow.model === workflowState.currentModel)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    if (!modelSavedFlows.length) {
        savedList.innerHTML = '<p class="workflow__hint">Nenhum fluxo salvo para este modelo.</p>'
        return
    }

    savedList.innerHTML = modelSavedFlows.map((flow) => {
        const created = new Date(flow.createdAt)
        const createdLabel = Number.isNaN(created.getTime()) ? '-' : created.toLocaleString('pt-BR')
        const stagesCount = Array.isArray(flow.stages) ? flow.stages.length : 0

        return `
            <div class="workflow__saved-item">
                <div class="workflow__saved-info">
                    <p class="workflow__saved-name">${flow.name}</p>
                    <p class="workflow__saved-meta">${stagesCount} caixas • Salvo em ${createdLabel}</p>
                </div>
                <div class="workflow__saved-actions">
                    <button type="button" class="workflow__small-btn" data-load-flow="${flow.id}">Carregar</button>
                    <button type="button" class="workflow__small-btn" data-delete-flow="${flow.id}">Excluir</button>
                </div>
            </div>
        `
    }).join('')
}

function saveCurrentWorkflowSnapshot() {
    const modal = document.getElementById('workflow-save-flow-modal')
    const input = document.getElementById('workflow-save-input')
    
    if (!modal || !input) return
    
    const defaultName = `Fluxo ${formatWorkflowModelLabel(workflowState.currentModel)} ${new Date().toLocaleDateString('pt-BR')}`
    input.value = defaultName
    modal.classList.remove('is-hidden')
    input.focus()
    input.select()
}

function closeWorkflowSaveFlowModal() {
    const modal = document.getElementById('workflow-save-flow-modal')
    if (modal) {
        modal.classList.add('is-hidden')
    }
}

function submitWorkflowSaveFlow() {
    const input = document.getElementById('workflow-save-input')
    
    if (!input) return
    
    const flowName = input.value.trim()
    if (!flowName) {
        window.alert('Por favor, insira um nome para o fluxo.')
        return
    }

    const snapshot = buildWorkflowSnapshot()
    snapshot.name = flowName

    workflowState.savedFlows.unshift(snapshot)
    persistWorkflowSavedFlows()
    renderWorkflowSavedFlows()
    closeWorkflowSaveFlowModal()
}

function loadSavedWorkflowById(flowId) {
    const flow = workflowState.savedFlows.find((item) => item.id === flowId)
    if (!flow) return

    workflowState.currentModel = flow.model
    workflowState.customExtrasByModel[flow.model] = Array.isArray(flow.customExtras) ? flow.customExtras.map((item) => ({ ...item })) : []
    workflowState.selectedClausesByModel[flow.model] = Array.isArray(flow.clauses)
        ? flow.clauses.map((item) => ({ clauseId: item.clauseId, values: { ...(item.values || {}) } }))
        : []

    ensureWorkflowModelState(flow.model)
    const stages = getWorkflowCurrentStages()
    workflowState.focusStep = stages[0]?.id || null
    workflowState.activeClauseByModel[flow.model] = workflowState.selectedClausesByModel[flow.model][0]?.clauseId || null
    workflowState.clauseFormEnabledByModel[flow.model] = false
    workflowState.clauseFormNoticeByModel[flow.model] = ''

    renderWorkflowAll()
}

function deleteSavedWorkflowById(flowId) {
    const index = workflowState.savedFlows.findIndex((item) => item.id === flowId)
    if (index === -1) return

    workflowState.savedFlows.splice(index, 1)
    persistWorkflowSavedFlows()
    renderWorkflowSavedFlows()
}

function renderWorkflowAll() {
    renderWorkflowModelOptions()
    renderWorkflowStepOptions()
    renderWorkflowBoard()
    renderWorkflowClauseLibrary()
    renderWorkflowSelectedClauses()
    renderWorkflowClauseForm()
    renderWorkflowDocumentPreview()
    renderWorkflowSavedFlows()
}

function addWorkflowClause(clauseId) {
    const selectedClauses = getCurrentModelSelectedClauses()
    if (selectedClauses.some((item) => item.clauseId === clauseId)) {
        return
    }

    selectedClauses.push({
        clauseId,
        values: {}
    })

    workflowState.activeClauseByModel[workflowState.currentModel] = clauseId
    setWorkflowClauseFormNotice('')
    setWorkflowClauseFormEnabled(false)
}

function removeWorkflowClause(clauseId) {
    const selectedClauses = getCurrentModelSelectedClauses()
    const index = selectedClauses.findIndex((item) => item.clauseId === clauseId)
    if (index === -1) return

    selectedClauses.splice(index, 1)

    if (workflowState.activeClauseByModel[workflowState.currentModel] === clauseId) {
        workflowState.activeClauseByModel[workflowState.currentModel] = selectedClauses[0]?.clauseId || null
        setWorkflowClauseFormNotice('Cláusula removida. Clique em "Preencher dados" para editar a próxima.')
        setWorkflowClauseFormEnabled(false)
    }
}

function saveWorkflowActiveClause() {
    const selectedClauses = getCurrentModelSelectedClauses()
    const activeClauseId = workflowState.activeClauseByModel[workflowState.currentModel]
    const clause = selectedClauses.find((item) => item.clauseId === activeClauseId)
    if (!clause) return

    setWorkflowClauseFormNotice('Dados da cláusula salvos. Agora você pode clicar em "Preencher dados" na próxima cláusula.')
    setWorkflowClauseFormEnabled(false)
    renderWorkflowSelectedClauses()
    renderWorkflowClauseForm()
    renderWorkflowDocumentPreview()
}

function createWorkflowDocument() {
    const modal = document.getElementById('workflow-new-document-modal')
    const input = document.getElementById('workflow-document-input')
    
    if (!modal || !input) return
    
    input.value = ''
    modal.classList.remove('is-hidden')
    input.focus()
}

function closeWorkflowNewDocumentModal() {
    const modal = document.getElementById('workflow-new-document-modal')
    if (modal) {
        modal.classList.add('is-hidden')
    }
}

function submitWorkflowNewDocument() {
    const input = document.getElementById('workflow-document-input')
    const stages = getWorkflowCurrentStages()
    
    if (!input || !stages.length) {
        return
    }

    const safeName = input.value.trim() || `Novo ${formatWorkflowModelLabel(workflowState.currentModel)}`
    const documents = getWorkflowCurrentDocuments()
    
    documents.unshift({
        id: `doc-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        nome: safeName,
        currentStep: stages[0].id,
        updatedAt: new Date()
    })
    
    closeWorkflowNewDocumentModal()
    renderWorkflowBoard()
}

function addWorkflowExtraStep() {
    const modal = document.getElementById('workflow-extra-stage-modal')
    const nameInput = document.getElementById('workflow-stage-name')
    const posInput = document.getElementById('workflow-stage-position')
    
    if (!modal || !nameInput || !posInput) return
    
    nameInput.value = ''
    posInput.value = ''
    modal.classList.remove('is-hidden')
    nameInput.focus()
}

function closeWorkflowExtraStageModal() {
    const modal = document.getElementById('workflow-extra-stage-modal')
    if (modal) {
        modal.classList.add('is-hidden')
    }
}

function submitWorkflowExtraStage() {
    const nameInput = document.getElementById('workflow-stage-name')
    const posInput = document.getElementById('workflow-stage-position')
    
    if (!nameInput || !posInput) return
    
    const cleanName = nameInput.value.trim()
    if (!cleanName) {
        window.alert('Por favor, insira um nome para a etapa.')
        return
    }

    const normalized = posInput.value.replace(',', '.').trim()
    const decimalValue = Number(normalized)

    if (!Number.isFinite(decimalValue)) {
        window.alert('Posição inválida. Use um número como 2.5')
        return
    }

    const extras = workflowState.customExtrasByModel[workflowState.currentModel]
    const duplicated = extras.some((extra) => Number(extra.pos) === decimalValue)
    if (duplicated) {
        window.alert('Já existe uma etapa nessa posição para este modelo.')
        return
    }

    extras.push({ pos: decimalValue, nome: cleanName })

    const stages = getWorkflowCurrentStages()
    if (!stages.some((stage) => stage.id === workflowState.focusStep)) {
        workflowState.focusStep = stages[0]?.id || null
    }
    
    closeWorkflowExtraStageModal()
    renderWorkflowStepOptions()
    renderWorkflowBoard()
}

function bindWorkflowEvents() {
    if (workflowRefs.modelSelect) {
        workflowRefs.modelSelect.addEventListener('change', (event) => {
            workflowState.currentModel = event.target.value
            ensureWorkflowModelState(workflowState.currentModel)
            setWorkflowClauseFormNotice('')
            setWorkflowClauseFormEnabled(false)

            const currentStages = getWorkflowCurrentStages()
            workflowState.focusStep = currentStages[0]?.id || null

            renderWorkflowAll()
        })
    }

    if (workflowRefs.myStepSelect) {
        workflowRefs.myStepSelect.addEventListener('change', (event) => {
            workflowState.focusStep = Number(event.target.value)
            renderWorkflowBoard()
        })
    }

    if (workflowRefs.focusMode) {
        workflowRefs.focusMode.addEventListener('change', (event) => {
            workflowState.focusOnlyMine = event.target.checked
            renderWorkflowBoard()
        })
    }

    if (workflowRefs.addDocumentButton) {
        workflowRefs.addDocumentButton.addEventListener('click', () => {
            createWorkflowDocument()
            renderWorkflowBoard()
        })
    }

    if (workflowRefs.addExtraButton) {
        workflowRefs.addExtraButton.addEventListener('click', () => {
            addWorkflowExtraStep()
            renderWorkflowStepOptions()
            renderWorkflowBoard()
        })
    }

    if (workflowRefs.saveFlowButton) {
        workflowRefs.saveFlowButton.addEventListener('click', () => {
            saveCurrentWorkflowSnapshot()
        })
    }

    if (workflowRefs.board) {
        workflowRefs.board.addEventListener('click', (event) => {
            const button = event.target.closest('[data-move-doc]')
            if (!button) return

            const documentId = button.getAttribute('data-move-doc')
            if (!documentId) return

            moveWorkflowDocumentForward(documentId)
            renderWorkflowBoard()
        })
    }

    if (workflowRefs.library) {
        workflowRefs.library.addEventListener('click', (event) => {
            const addButton = event.target.closest('[data-add-clause]')
            if (!addButton) return

            const clauseId = addButton.getAttribute('data-add-clause')
            if (!clauseId) return

            addWorkflowClause(clauseId)
            renderWorkflowClauseLibrary()
            renderWorkflowSelectedClauses()
            renderWorkflowClauseForm()
            renderWorkflowDocumentPreview()
        })
    }

    if (workflowRefs.selectedClauses) {
        workflowRefs.selectedClauses.addEventListener('click', (event) => {
            const editButton = event.target.closest('[data-edit-clause]')
            if (editButton) {
                const clauseId = editButton.getAttribute('data-edit-clause')
                if (clauseId) {
                    workflowState.activeClauseByModel[workflowState.currentModel] = clauseId
                    setWorkflowClauseFormNotice('')
                    setWorkflowClauseFormEnabled(true)
                    renderWorkflowSelectedClauses()
                    renderWorkflowClauseForm()
                }
                return
            }

            const removeButton = event.target.closest('[data-remove-clause]')
            if (removeButton) {
                const clauseId = removeButton.getAttribute('data-remove-clause')
                if (clauseId) {
                    removeWorkflowClause(clauseId)
                    renderWorkflowClauseLibrary()
                    renderWorkflowSelectedClauses()
                    renderWorkflowClauseForm()
                    renderWorkflowDocumentPreview()
                }
            }
        })
    }

    if (workflowRefs.clauseForm) {
        workflowRefs.clauseForm.addEventListener('click', (event) => {
            const saveButton = event.target.closest('[data-save-clause]')
            if (!saveButton) return

            saveWorkflowActiveClause()
        })

        workflowRefs.clauseForm.addEventListener('input', (event) => {
            const field = event.target.closest('[data-clause-field]')
            if (!field) return

            const fieldName = field.getAttribute('data-clause-field')
            if (!fieldName) return

            const selectedClauses = getCurrentModelSelectedClauses()
            const activeClauseId = workflowState.activeClauseByModel[workflowState.currentModel]
            const clause = selectedClauses.find((item) => item.clauseId === activeClauseId)

            if (!clause) return
            clause.values[fieldName] = field.value
            renderWorkflowDocumentPreview()
        })
    }

    if (workflowRefs.savedList) {
        workflowRefs.savedList.addEventListener('click', (event) => {
            const loadButton = event.target.closest('[data-load-flow]')
            if (loadButton) {
                const flowId = loadButton.getAttribute('data-load-flow')
                if (flowId) {
                    loadSavedWorkflowById(flowId)
                }
                return
            }

            const deleteButton = event.target.closest('[data-delete-flow]')
            if (deleteButton) {
                const flowId = deleteButton.getAttribute('data-delete-flow')
                if (flowId) {
                    deleteSavedWorkflowById(flowId)
                }
            }
        })
    }

    const newDocModal = document.getElementById('workflow-new-document-modal')
    if (newDocModal) {
        const createBtn = document.getElementById('workflow-document-create')
        const cancelBtn = document.getElementById('workflow-document-cancel')
        const input = document.getElementById('workflow-document-input')

        if (createBtn) {
            createBtn.addEventListener('click', submitWorkflowNewDocument)
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeWorkflowNewDocumentModal)
        }
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') submitWorkflowNewDocument()
                else if (e.key === 'Escape') closeWorkflowNewDocumentModal()
            })
        }
        newDocModal.addEventListener('click', (e) => {
            if (e.target === newDocModal) closeWorkflowNewDocumentModal()
        })
    }

    const extraStageModal = document.getElementById('workflow-extra-stage-modal')
    if (extraStageModal) {
        const createBtn = document.getElementById('workflow-stage-create')
        const cancelBtn = document.getElementById('workflow-stage-cancel')
        const nameInput = document.getElementById('workflow-stage-name')
        const posInput = document.getElementById('workflow-stage-position')

        if (createBtn) {
            createBtn.addEventListener('click', submitWorkflowExtraStage)
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeWorkflowExtraStageModal)
        }
        if (nameInput) {
            nameInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') posInput?.focus()
                else if (e.key === 'Escape') closeWorkflowExtraStageModal()
            })
        }
        if (posInput) {
            posInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') submitWorkflowExtraStage()
                else if (e.key === 'Escape') closeWorkflowExtraStageModal()
            })
        }
        extraStageModal.addEventListener('click', (e) => {
            if (e.target === extraStageModal) closeWorkflowExtraStageModal()
        })
    }

    const saveFlowModal = document.getElementById('workflow-save-flow-modal')
    if (saveFlowModal) {
        const createBtn = document.getElementById('workflow-save-create')
        const cancelBtn = document.getElementById('workflow-save-cancel')
        const input = document.getElementById('workflow-save-input')

        if (createBtn) {
            createBtn.addEventListener('click', submitWorkflowSaveFlow)
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeWorkflowSaveFlowModal)
        }
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') submitWorkflowSaveFlow()
                else if (e.key === 'Escape') closeWorkflowSaveFlowModal()
            })
        }
        saveFlowModal.addEventListener('click', (e) => {
            if (e.target === saveFlowModal) closeWorkflowSaveFlowModal()
        })
    }
}

function initWorkflowEngine() {
    workflowRefs.modelSelect = document.getElementById('workflow-model')
    workflowRefs.myStepSelect = document.getElementById('workflow-my-step')
    workflowRefs.focusMode = document.getElementById('workflow-focus-mode')
    workflowRefs.board = document.getElementById('workflow-board')
    workflowRefs.library = document.getElementById('workflow-clause-library')
    workflowRefs.selectedClauses = document.getElementById('workflow-selected-clauses')
    workflowRefs.clauseForm = document.getElementById('workflow-clause-form')
    workflowRefs.documentPreview = document.getElementById('workflow-document-preview')
    workflowRefs.addExtraButton = document.getElementById('workflow-new-extra')
    workflowRefs.addDocumentButton = document.getElementById('workflow-new-document')
    workflowRefs.saveFlowButton = document.getElementById('workflow-save-flow')
    workflowRefs.savedList = document.getElementById('workflow-saved-list')

    if (!workflowRefs.modelSelect || !workflowRefs.board) {
        return
    }

    loadWorkflowSavedFlows()
    ensureWorkflowModelState(workflowState.currentModel)
    workflowState.focusStep = getWorkflowCurrentStages()[0]?.id || null
    if (workflowRefs.focusMode) {
        workflowRefs.focusMode.checked = workflowState.focusOnlyMine
    }

    renderWorkflowAll()
    bindWorkflowEvents()
}

initWorkflowEngine()
