import { base } from './base.js'

export const intro = (out,party) => {
    const intros = {
        intro:{
            ...base,
            text:`<p>The soft rumble of breaking waves and distant seabird squawking gently breaks your slumber. You groggily blink the sleep from your eyes, familiar trappings of your bedroom swimming into view as the hazy brightness recedes. You shiver slightly, searching hand groping beneath fluttering curtains to push the ajar window shut, closing it with a dull bump and silencing the external ambiance. The mild amusement you feel at falling asleep with it open despite the cold turns rapidly to regret as you extract yourself from the bed covers, shivering, and stretch, skeleton cracking satisfyingly in multiple places</p>`,
            choices:`<p>You:<br><br>1) Go outside<br>2) Explore your room</p>`,
            out1:{
                loc:`intro`,
                out:`hallway`
            },
            out2:{
                loc:`intro`,
                out:`bedroom`
            }
        },
        hallway:{
            ...base,
            text:`<p>You find yourself on the narrow upstairs landing. The floor is rough along the edges but years of continuous usage have sanded the centre as though a guild carpenter had cut and placed it and not your late farther, shortly before you were born. With this thought in mind, your eyes wander to the door directly opposite yours. It is wooden, like the floor, but this was made by guildsmen; the craftsmanship of the long swirling floral carvings and delicate, ornate golden filigree spelling your parents' names still proud after all this time, if a bit tarnished in the case of the latter. By rights that room, like the rest of the house, is yours now, but you haven't had the strength to enter since they died.</p>`,
            choices:`<p>You:<br><br>1) Go downstairs<br>2) Return to your room</p>`,
            out1:{
                check:{
                    sub:``,
                    param:{
                        profile:`mainchar`
                    },
                    specs:{
                        false:{
                            check:{
                                param:{
                                    samantha:`mainchar`
                                },
                                specs:{
                                    false:{
                                        loc:`intro`,
                                        out:`dsnochar`,
                                        rltns:{
                                            samantha:{
                                                dsnochar:`-`
                                            }
                                        }
                                    },
                                    true:{
                                        check:{
                                            param:{
                                                salamander:`mainchar`
                                            },
                                            specs:{
                                                false:{
                                                    loc:`intro`,
                                                    out:`dsnochar_sam`,
                                                    rltns:{
                                                        samantha:{
                                                            dsnochar_sam:`-`
                                                        }
                                                    }
                                                },
                                                true:{
                                                    loc:`intro`,
                                                    out:`dsnochar_samsal`,
                                                    rltns:{
                                                        samantha:{
                                                            dsnochar_samsal:`-`
                                                        },
                                                        salamander:{
                                                            dsnochar_samsal:`-`
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        true:{
                            check:{
                                param:{
                                    samantha:`mainchar`
                                },
                                specs:{
                                    false:{
                                        loc:`intro`,
                                        out:`dschar`
                                    },
                                    true:{
                                        check:{
                                            param:{
                                                salamander:`mainchar`
                                            },
                                            specs:{
                                                false:{
                                                    loc:`intro`,
                                                    out:`dschar_sam`,
                                                    rltns:{
                                                        samantha:{
                                                            dschar_sam:`+`
                                                        }
                                                    }
                                                },
                                                true:{
                                                    loc:`intro`,
                                                    out:`dschar_samsal`,
                                                    rltns:{
                                                        samantha:{
                                                            dschar_samsal:`+`
                                                        },
                                                        salamander:{
                                                            dschar_samsal:`+`
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            out2:{
                check:{
                    param:{
                        profile:`mainchar`
                    },
                    specs:{
                        false:{
                            loc:`intro`,
                            out:`bedroom`
                        },
                        true:{
                            loc:`intro`,
                            out:`bedroom_char`
                        }
                    }
                }
            }
        },
        dsnochar:{
            ...base,
            text:`"Aggghhhhh!!!" shrieks Samantha, looking up from the large cauldron she is stirring at the centre of the kitchen, "go get some clothes on!!!!!"
            
            "Sorry," you mumble, "didn't realise your were here."
            
            "That's not the point!!" she responds, face red, her fluffy yellow dress exaggerating her flustered attempts to look anywhere but your half-naked body, "get dressed, for the gods' sake!!"</p>`,
            choices:`<p>You:<br><br>1) Stay and try to talk to her<br>2) Do as she says</p>`,
            out1:{
                loc:`intro`,
                out:`samnak`,
                rltns:{
                    samantha:{
                        samnak:`-`
                    }
                }
            },
            out2:{
                loc:`intro`,
                out:`bedroom`,
                rltns:{
                    samantha:{
                        bedroom:`+`
                    }
                }
            }
        },
        dsnochar_sam:{
            ...base,
            text:`Samantha slams her wooden spoon against the rim of the cauldron so hard that you hear the wood splinter. "What is wrong with you!?" she snaps, shocked bluster of before come full anger. Even for her normal overbearing matriarchal demeanor, this seems a bit much, and you consider that something deeper might be troubling her.</p>`,
            choices:`<p>You:<br><br>1) Try and talk to her<br>2) Return to your room</p>`,
            out1:{
                loc:`intro`,
                out:`samnak`,
                rltns:{
                    samantha:{
                        samnak:`-`
                    }
                }
            },
            out2:{
                loc:`intro`,
                out:`bedroom`
            }
        },
        dsnochar_samsal:{
            ...base,
            text:`<p>Really now, this is getting ridiculous!" Samantha shakes her head incredulously, having reached the exasperation stage of irritation, "I know you don't normally wander 'round half dressed, have you just chosen today to be weird?"
        
            The Count, observing you with an amused smirk, remarks "I find myself agreeing with the young lady this time, you do seem to be a rather odd fellow." He sighs, then continues, "but that is, fortunately, immaterial to the reason I am here, if you'd like to know?</p>"`,
            choices:`<p>You regard the uninvited stranger, audaciously judging you, after his own introduction, in your own home:<br><br>1) Listen to why he's here<br>2) Return to your room<br>3) ${`leave_polite` in (party?.mainchar?.rltns?.salamander ?? {}) ? `leave_firm` in (party?.mainchar?.rltns?.salamander ?? {}) ? `GTFO` : `Ask him to leave, firmly` : `Ask him to leave, politely`}</p>`,
            out1:{
                loc:`intro`,
                out:`business`,
                rltns:{
                    samantha:{
                        business:`-`
                    }
                }
            },
            out2:{
                loc:`intro`,
                out:`bedroom`
            },
            out3:{
                check:{
                    end:`salamander`,
                    param:{
                        leave_polite:`mainchar`
                    },
                    specs:{
                        false:{
                            loc:`intro`,
                            out:`leave_polite`,
                            rltns:{
                                samantha:{
                                    leave_polite:`-`
                                },
                                salamander:{
                                    leave_polite:`-`
                                }
                            }
                        },
                        true:{
                            check:{
                                end:`salamander`,
                                param:{
                                    leave_firm:`mainchar`
                                },
                                specs:{
                                    false:{
                                        loc:`intro`,
                                        out:`leave_firm`,
                                        rltns:{
                                            samantha:{
                                                leave_firm:`-`
                                            },
                                            salamander:{
                                                leave_firm:`-`
                                            }
                                        }
                                    },
                                    true:{
                                        loc:`intro`,
                                        out:`gtfo`,
                                        rltsn:{
                                            samantha:{
                                                gtfo:`-`
                                            },
                                            salamander:{
                                                gtfo:`-`
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        samnak:{
            ...base,
            text:`<p>"Don't you think you're overrea-" you begin${`bedroom` in (party?.mainchar?.rltns?.samantha ?? {}) ? ` warily, keenly aware you might be the next target for the spoon` : ``},before a man's voice interject softly.
            
            "I believe she is acting for my benefit."
            
            You turn to regard the alcove just behind the base of the stairs - the balustrade of which having initially obscured your view - to observe your "guest"; though his top hat is so tall you struggle to understand how you missed its pinnacle on your way down despite the occlusion. "Who are you?" you ask, before he can continue.
            
            Samantha opens her mouth, no doubt to scold you for being rude, but the stranger speaks first, standing and adjusting his purple waistcoat as he does so. He is tall and slender, and younger than one might assume for someone so formally dressed. "I am the Count d'Salamander," he says, flatly, before flamboyantly removing his hat in a sweeping bow, "and I am at your service."</p>`,
            choices:`<p>You stare, bemused, at the crown of a perfect bowl of silver hair:<br><br>1) Apologise<br>2) Wait for him to continue<br>3) Ask him to leave, politely</p>`,
            out1:{
                loc:`intro`,
                out:`apologise`,
                rltns:{
                    samantha:{
                        apologise:`+`
                    },
                    salamander:{
                        apologise:`+`
                    }
                }
            },
            out2:{
                loc:`intro`,
                out:`wait`,
                rltns:{
                    samantha:{
                        wait:`-`
                    }
                }
            },
            out3:{
                loc:`intro`,
                out:`leave_polite`,
                rltns:{
                    samantha:{
                        leave_polite:`-`
                    },
                    salamander:{
                        leave_polite:`-`
                    }
                }
            }
        },
        dschar:{
            ...base,
            text:`"About time you got up!" Samantha scolds you the second you enter into view of the kitchen. She is at its centre, stirring a large cauldron of stew over some pyrysts. You have known each other for many years and, while she technically has her own place, she spends so much time here that she might as well be your roommate - even having converted a downstairs spare-room into a makeshift bedroom for herself.
            
            "Some of us appreciate the art of sleep, philistines like yourself wouldn't understand, getting up at the crack of dawn," your tone is one of friendly mockery, but you sense a deeper meaning to her scorn - she isn't normally bothered by your lying in. You know from experience that being obtuse will get her to spill quickest, but she is spared the light verbal teasing.
            
            "Ha Haha HAHAHAHAHA!!!" a laugh from behind you cuts in and you wheel around. Your guest continues, heedless of your shocked features, "I am the Count d'Salamander!" he exclaims, somehow simultaneously standing, removing his hat in a sweeping motion and bowing, "and I am at your service."`,
            choices:`<p>Heart pounding a tattoo against your ribcage, chest soaked in a cold, clinging sweat, you stare at the perfect dome of silver hair before:<br><br>1) Apologise<br>2) Wait for further explanation<br>3) Ask him to leave, politely<br>4) Punch it`,
            out1:{
                loc:`intro`,
                out:`apologise_char`
            },
            out2:{
                loc:`intro`,
                out:`wait_char`
            },
            out3:{
                checks:[{
                    type:`rec`,
                    num:9,
                    loc:`intro`,
                    out:`leave_polite_char`
                }],
                loc:`intro`,
                out:`leave_polite_char`
            },
            out4:{
                checks:[{
                    sb:`stat`,
                    stat:`str`,
                    param:{
                        mainchar:30
                    },
                    specs:{
                        false:{
                            loc:`intro`,
                            out:`punch`
                        },
                        true:{
                            loc:`intro`,
                            out:`punch_fake`
                        }
                    }
                }]
            }
        },
        bedroom:{
            ...base,
            text:`Your bedroom is cozy and, with the exception of a significantly larger bed, has remained largely unchanged since childhood. A small pile of dirty clothes lie upon a chair besides a plain but hard-wearing wardrobe older than you. Beside that, directly opposite your bed, is a long mirror. It stands perpendicular to a desk that also serves as your bedside table, above which sits the window you shut earlier.`,
            choices:`<p>You:<br><br>1) Leave<br>2) Get dressed</p>`,
            out1:{
                loc:`intro`,
                out:`hallway`
            },
            out2:{
                loc:`intro`,
                out:`bedroom_char`,
                checks:[{
                    type:`in`,
                    is:false,
                    mod:`party`,
                    func:`mainchargen`,
                    param:{
                        profile:`mainchar`
                    }
                }]
            }
        }
    }
    return(intros[out]);
}