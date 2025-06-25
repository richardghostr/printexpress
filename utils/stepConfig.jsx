
export const step = [
    {
        id: 2,
        title: 'Où êtes-vous situé ?',
        fields:[
            {id: 2, type: 'ville', hint: 'Ville'},
            {id: 2, type: 'institution', hint: 'Institution (optionel)'}
        ]
    },{
        id: 3,
        title: 'Saisissez vos informations de contact',
        fields: [
            {id: 3, type: 'email', hint: 'Email'},
            {id: 3, type: 'tel', hint: 'Numéro de téléphone'}
        ]
    },{
        id: 4,
        title: 'Sécurisez votre compte',
        fields: [
            {id: 4, type: 'password', hint: 'Mot de passe'},
            {id: 4, type: 'confirmPassword', hint: 'Confirmer votre mot de passe'}
        ]
    },{
        id: 5,
        title: 'Mettez à jour votre photo de profil',
        fields: [
            {id: 5, type: 'photo', hint: 'Photo de profil'},
            {id: 5, type: 'password', hint: 'Mot de passe'}
        ]
    }
]