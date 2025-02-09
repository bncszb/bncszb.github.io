type PanelStore = {
  isPanelOpen: boolean;
  panelContent: {
    component: any;
    props?: Record<string, any>;
  } | null;
  openPanel: (component: any, props?: Record<string, any>) => void;
  closePanel: () => void;
};

export let panelState = $state<PanelStore>({
  isPanelOpen: false,
  panelContent: null,
  openPanel,
  closePanel,
});

export function openPanel(component: any, props: Record<string, any> = {}) {
  panelState.panelContent = {
    component,
    props,
  };
  panelState.isPanelOpen = true;
}

export function closePanel() {
  panelState.panelContent = null;
  panelState.isPanelOpen = false;
}
