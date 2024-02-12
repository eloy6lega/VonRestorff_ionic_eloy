import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeOutline, homeSharp, personOutline, personSharp, colorFilterOutline, colorFilterSharp, archiveOutline, archiveSharp, accessibilityOutline, accessibilitySharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Von Restorff',
    url: '/VonRestorff',
    iosIcon: accessibilityOutline,
    mdIcon: accessibilitySharp
  },
  {
    title: 'The Effect',
    url: '/Effect',
    iosIcon: colorFilterOutline,
    mdIcon: colorFilterSharp
  },
  {
    title: 'Contact',
    url: '/Contact',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'About Me',
    url: '/AboutMe',
    iosIcon: personOutline,
    mdIcon: personSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Eloy Pérez - Von Restorff</IonListHeader>
          <IonNote>eloypg.web@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
