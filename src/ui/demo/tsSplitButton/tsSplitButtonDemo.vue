<template>
   <div>
      <div class="content-section introduction">
         <div class="feature-intro">
               <h1>TsSplitButton</h1>
               <p>SplitButton groups a set of commands in an overlay with a default command.</p>
         </div>
      </div>
      <!-- <Toast /> -->
      <h5>Basic</h5>
      <ts-splitbutton label="Save" icon="pi pi-plus" @click="save" :model="items"></ts-splitbutton>

      <h5>Nested</h5>
      <ts-splitbutton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></ts-splitbutton>

      <h5>Severities</h5>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-mb-2"></ts-splitbutton>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary p-mb-2"></ts-splitbutton>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-button-success p-mb-2"></ts-splitbutton>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-button-info p-mb-2"></ts-splitbutton>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning p-mb-2"></ts-splitbutton>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-button-help p-mb-2"></ts-splitbutton>
      <ts-splitbutton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger p-mb-2"></ts-splitbutton>
      <TsSplitButtonDoc/>
   </div>
</template>

<script>
import { ref } from "vue"
import TsSplitButtonDoc from './tsSplitButtonDoc.vue'

export default {
   components: {
      TsSplitButtonDoc
   },
    setup() {
		// const toast = useToast();
        const items = ref([
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    // toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    // toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                }
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
					window.location.hash = "/fileupload"
				}
            }
        ]);
        const nestedItems = ref([
            {
               label:'File',
               icon:'pi pi-fw pi-file',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-plus',
                     items:[
                        {
                           label:'Bookmark',
                           icon:'pi pi-fw pi-bookmark'
                        },
                        {
                           label:'Video',
                           icon:'pi pi-fw pi-video'
                        }
                     ]
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-trash'
                  },
                  {
                     separator:true
                  },
                  {
                     label:'Export',
                     icon:'pi pi-fw pi-external-link'
                  }
               ]
            },
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Left',
                     icon:'pi pi-fw pi-align-left'
                  },
                  {
                     label:'Right',
                     icon:'pi pi-fw pi-align-right'
                  },
                  {
                     label:'Center',
                     icon:'pi pi-fw pi-align-center'
                  },
                  {
                     label:'Justify',
                     icon:'pi pi-fw pi-align-justify'
                  }
               ]
            },
            {
               label:'Users',
               icon:'pi pi-fw pi-user',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-user-plus',
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-user-minus',
                  },
                  {
                     label:'Search',
                     icon:'pi pi-fw pi-users',
                     items:[
                        {
                           label:'Filter',
                           icon:'pi pi-fw pi-filter',
                           items:[
                              {
                                 label:'Print',
                                 icon:'pi pi-fw pi-print'
                              }
                           ]
                        },
                        {
                           icon:'pi pi-fw pi-bars',
                           label:'List'
                        }
                     ]
                  }
               ]
            },
            {
               label:'Events',
               icon:'pi pi-fw pi-calendar',
               items:[
                  {
                     label:'Edit',
                     icon:'pi pi-fw pi-pencil',
                     items:[
                        {
                           label:'Save',
                           icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                           label:'Delete',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  },
                  {
                     label:'Archieve',
                     icon:'pi pi-fw pi-calendar-times',
                     items:[
                        {
                           label:'Remove',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  }
               ]
            },
            {
               separator:true
            },
            {
               label:'Quit',
               icon:'pi pi-fw pi-power-off'
            }
        ]);
        const save = () => {
            // toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        };
        return {items, nestedItems, save}
    }
}
</script>

<style lang="scss" scoped>
.p-splitbutton {
    margin-right: .5rem;
}
</style>
