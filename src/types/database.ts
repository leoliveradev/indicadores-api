export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      comunicaciones_moviles_accesos: {
        Row: {
          anio: number
          operativos: number
          pospago: number
          prepago: number
          trimestre: number
        }
        Insert: {
          anio: number
          operativos: number
          pospago: number
          prepago: number
          trimestre: number
        }
        Update: {
          anio?: number
          operativos?: number
          pospago?: number
          prepago?: number
          trimestre?: number
        }
        Relationships: []
      }
      comunicaciones_moviles_ingresos: {
        Row: {
          anio: number
          ingresos: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          ingresos?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          ingresos?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      comunicaciones_moviles_llamadas: {
        Row: {
          anio: number
          pospago: number | null
          prepago: number | null
          total: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          pospago?: number | null
          prepago?: number | null
          total?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          pospago?: number | null
          prepago?: number | null
          total?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      comunicaciones_moviles_minutos: {
        Row: {
          anio: number
          pospago: number | null
          prepago: number | null
          total: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          pospago?: number | null
          prepago?: number | null
          total?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          pospago?: number | null
          prepago?: number | null
          total?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      comunicaciones_moviles_penetracion: {
        Row: {
          accesos_100_hab: number | null
          anio: number
          trimestre: number
        }
        Insert: {
          accesos_100_hab?: number | null
          anio: number
          trimestre: number
        }
        Update: {
          accesos_100_hab?: number | null
          anio?: number
          trimestre?: number
        }
        Relationships: []
      }
      comunicaciones_moviles_sms: {
        Row: {
          anio: number
          sms: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          sms?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          sms?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      internet_accesos_baf: {
        Row: {
          anio: number
          banda_ancha_fija: number | null
          dial_up: number | null
          total: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          banda_ancha_fija?: number | null
          dial_up?: number | null
          total?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          banda_ancha_fija?: number | null
          dial_up?: number | null
          total?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      internet_accesos_baf_provincias: {
        Row: {
          anio: number
          banda_ancha_fija: number | null
          created_at: string
          dial_up: number | null
          id: number
          provincia: string
          total: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          banda_ancha_fija?: number | null
          created_at?: string
          dial_up?: number | null
          id?: number
          provincia: string
          total?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          banda_ancha_fija?: number | null
          created_at?: string
          dial_up?: number | null
          id?: number
          provincia?: string
          total?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      internet_accesos_penetracion: {
        Row: {
          accesos_cada_100_habitantes: number | null
          accesos_cada_100_hogares: number | null
          anio: number
          trimestre: number
        }
        Insert: {
          accesos_cada_100_habitantes?: number | null
          accesos_cada_100_hogares?: number | null
          anio: number
          trimestre: number
        }
        Update: {
          accesos_cada_100_habitantes?: number | null
          accesos_cada_100_hogares?: number | null
          anio?: number
          trimestre?: number
        }
        Relationships: []
      }
      internet_accesos_penetracion_provincias: {
        Row: {
          accesos_cada_100_habitantes: number | null
          accesos_cada_100_hogares: number | null
          anio: number | null
          created_at: string
          id: number
          provincia: string | null
          trimestre: number | null
        }
        Insert: {
          accesos_cada_100_habitantes?: number | null
          accesos_cada_100_hogares?: number | null
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
        }
        Update: {
          accesos_cada_100_habitantes?: number | null
          accesos_cada_100_hogares?: number | null
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
        }
        Relationships: []
      }
      internet_accesos_rangos_velocidad: {
        Row: {
          anio: number
          entre_10Mbps_20Mbps: number | null
          entre_1Mbps_6Mbps: number | null
          entre_20Mbps_30Mbps: number | null
          entre_512_1Mbps: number | null
          entre_6Mbps_10Mbps: number | null
          hasta_512_kbps: number | null
          mayor_30Mbps: number | null
          otros: number | null
          total: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          entre_10Mbps_20Mbps?: number | null
          entre_1Mbps_6Mbps?: number | null
          entre_20Mbps_30Mbps?: number | null
          entre_512_1Mbps?: number | null
          entre_6Mbps_10Mbps?: number | null
          hasta_512_kbps?: number | null
          mayor_30Mbps?: number | null
          otros?: number | null
          total?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          entre_10Mbps_20Mbps?: number | null
          entre_1Mbps_6Mbps?: number | null
          entre_20Mbps_30Mbps?: number | null
          entre_512_1Mbps?: number | null
          entre_6Mbps_10Mbps?: number | null
          hasta_512_kbps?: number | null
          mayor_30Mbps?: number | null
          otros?: number | null
          total?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      internet_accesos_rangos_velocidad_provincias: {
        Row: {
          anio: number | null
          created_at: string
          entre_10Mbps_20Mbps: number | null
          entre_1Mbps_6Mbps: number | null
          entre_20Mbps_30Mbps: number | null
          entre_512_1Mbps: number | null
          entre_6Mbps_10Mbps: number | null
          hasta_512kbps: number | null
          id: number
          mayor_30Mbps: number | null
          otros: number | null
          provincia: string | null
          total: number | null
          trimestre: number | null
        }
        Insert: {
          anio?: number | null
          created_at?: string
          entre_10Mbps_20Mbps?: number | null
          entre_1Mbps_6Mbps?: number | null
          entre_20Mbps_30Mbps?: number | null
          entre_512_1Mbps?: number | null
          entre_6Mbps_10Mbps?: number | null
          hasta_512kbps?: number | null
          id?: number
          mayor_30Mbps?: number | null
          otros?: number | null
          provincia?: string | null
          total?: number | null
          trimestre?: number | null
        }
        Update: {
          anio?: number | null
          created_at?: string
          entre_10Mbps_20Mbps?: number | null
          entre_1Mbps_6Mbps?: number | null
          entre_20Mbps_30Mbps?: number | null
          entre_512_1Mbps?: number | null
          entre_6Mbps_10Mbps?: number | null
          hasta_512kbps?: number | null
          id?: number
          mayor_30Mbps?: number | null
          otros?: number | null
          provincia?: string | null
          total?: number | null
          trimestre?: number | null
        }
        Relationships: []
      }
      internet_accesos_tecnologias: {
        Row: {
          adsl: number | null
          anio: number
          cablemodem: number | null
          fibra_optica: number | null
          otros: number | null
          total: number | null
          trimestre: number
          wireless: number | null
        }
        Insert: {
          adsl?: number | null
          anio: number
          cablemodem?: number | null
          fibra_optica?: number | null
          otros?: number | null
          total?: number | null
          trimestre: number
          wireless?: number | null
        }
        Update: {
          adsl?: number | null
          anio?: number
          cablemodem?: number | null
          fibra_optica?: number | null
          otros?: number | null
          total?: number | null
          trimestre?: number
          wireless?: number | null
        }
        Relationships: []
      }
      internet_accesos_tecnologias_localidades: {
        Row: {
          accesos: number | null
          created_at: string
          id: number
          link_indec: number | null
          localidad: string | null
          partido: string | null
          provincia: string | null
          tecnologia: string | null
        }
        Insert: {
          accesos?: number | null
          created_at?: string
          id?: number
          link_indec?: number | null
          localidad?: string | null
          partido?: string | null
          provincia?: string | null
          tecnologia?: string | null
        }
        Update: {
          accesos?: number | null
          created_at?: string
          id?: number
          link_indec?: number | null
          localidad?: string | null
          partido?: string | null
          provincia?: string | null
          tecnologia?: string | null
        }
        Relationships: []
      }
      internet_accesos_tecnologias_provincias: {
        Row: {
          adsl: number | null
          anio: number | null
          cablemodem: number | null
          created_at: string
          fibra_optica: number | null
          id: number
          otros: number | null
          provincia: string | null
          total: number | null
          trimestre: number | null
          wireless: number | null
        }
        Insert: {
          adsl?: number | null
          anio?: number | null
          cablemodem?: number | null
          created_at?: string
          fibra_optica?: number | null
          id?: number
          otros?: number | null
          provincia?: string | null
          total?: number | null
          trimestre?: number | null
          wireless?: number | null
        }
        Update: {
          adsl?: number | null
          anio?: number | null
          cablemodem?: number | null
          created_at?: string
          fibra_optica?: number | null
          id?: number
          otros?: number | null
          provincia?: string | null
          total?: number | null
          trimestre?: number | null
          wireless?: number | null
        }
        Relationships: []
      }
      internet_accesos_velocidad_localidades: {
        Row: {
          accesos: number | null
          created_at: string
          id: number
          link_indec: number | null
          localidad: string | null
          partido: string | null
          provincia: string | null
          velocidad: number | null
        }
        Insert: {
          accesos?: number | null
          created_at?: string
          id?: number
          link_indec?: number | null
          localidad?: string | null
          partido?: string | null
          provincia?: string | null
          velocidad?: number | null
        }
        Update: {
          accesos?: number | null
          created_at?: string
          id?: number
          link_indec?: number | null
          localidad?: string | null
          partido?: string | null
          provincia?: string | null
          velocidad?: number | null
        }
        Relationships: []
      }
      internet_accesos_velocidad_provincias: {
        Row: {
          accesos: number | null
          anio: number | null
          created_at: string
          id: number
          provincia: string | null
          trimestre: number | null
          velocidad: number | null
        }
        Insert: {
          accesos?: number | null
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
          velocidad?: number | null
        }
        Update: {
          accesos?: number | null
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
          velocidad?: number | null
        }
        Relationships: []
      }
      internet_ingresos: {
        Row: {
          anio: number
          ingresos: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          ingresos?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          ingresos?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      internet_velocidad_media_descarga: {
        Row: {
          anio: number
          Mbps: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          Mbps?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          Mbps?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      internet_velocidad_media_descarga_provincias: {
        Row: {
          anio: number | null
          created_at: string
          id: number
          mbps: number | null
          provincia: string | null
          trimestre: number | null
        }
        Insert: {
          anio?: number | null
          created_at?: string
          id?: number
          mbps?: number | null
          provincia?: string | null
          trimestre?: number | null
        }
        Update: {
          anio?: number | null
          created_at?: string
          id?: number
          mbps?: number | null
          provincia?: string | null
          trimestre?: number | null
        }
        Relationships: []
      }
      localidades: {
        Row: {
          id: number
          localidad: string | null
          partido_id: number | null
        }
        Insert: {
          id: number
          localidad?: string | null
          partido_id?: number | null
        }
        Update: {
          id?: number
          localidad?: string | null
          partido_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "localidades_partido_id_fkey"
            columns: ["partido_id"]
            isOneToOne: false
            referencedRelation: "partidos"
            referencedColumns: ["id"]
          },
        ]
      }
      mercado_postal_facturacion: {
        Row: {
          anio: number
          mes: number
          monetarios: number | null
          postales: number | null
          telegraficas: number | null
        }
        Insert: {
          anio: number
          mes: number
          monetarios?: number | null
          postales?: number | null
          telegraficas?: number | null
        }
        Update: {
          anio?: number
          mes?: number
          monetarios?: number | null
          postales?: number | null
          telegraficas?: number | null
        }
        Relationships: []
      }
      mercado_postal_facturacion_produccion_provincias: {
        Row: {
          anio: number | null
          created_at: string
          id: number
          pesos: number | null
          provincia: string | null
          trimestre: number | null
          unidades: number | null
        }
        Insert: {
          anio?: number | null
          created_at?: string
          id?: number
          pesos?: number | null
          provincia?: string | null
          trimestre?: number | null
          unidades?: number | null
        }
        Update: {
          anio?: number | null
          created_at?: string
          id?: number
          pesos?: number | null
          provincia?: string | null
          trimestre?: number | null
          unidades?: number | null
        }
        Relationships: []
      }
      mercado_postal_personal_ocupado: {
        Row: {
          anio: number
          personal_ocupado: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          personal_ocupado?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          personal_ocupado?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      mercado_postal_produccion: {
        Row: {
          anio: number
          mes: number
          monetarios: number | null
          postales: number | null
          telegraficas: number | null
        }
        Insert: {
          anio: number
          mes: number
          monetarios?: number | null
          postales?: number | null
          telegraficas?: number | null
        }
        Update: {
          anio?: number
          mes?: number
          monetarios?: number | null
          postales?: number | null
          telegraficas?: number | null
        }
        Relationships: []
      }
      partidos: {
        Row: {
          id: number
          partido: string | null
          provincia_id: number | null
        }
        Insert: {
          id: number
          partido?: string | null
          provincia_id?: number | null
        }
        Update: {
          id?: number
          partido?: string | null
          provincia_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "partidos_provincia_id_fkey"
            columns: ["provincia_id"]
            isOneToOne: false
            referencedRelation: "provincias"
            referencedColumns: ["id"]
          },
        ]
      }
      portabiliad_movil: {
        Row: {
          anio: number
          mes: number
          total: number | null
        }
        Insert: {
          anio: number
          mes: number
          total?: number | null
        }
        Update: {
          anio?: number
          mes?: number
          total?: number | null
        }
        Relationships: []
      }
      provincias: {
        Row: {
          id: number
          provincia: string | null
        }
        Insert: {
          id: number
          provincia?: string | null
        }
        Update: {
          id?: number
          provincia?: string | null
        }
        Relationships: []
      }
      telefonia_fija_accesos: {
        Row: {
          anio: number
          comercial: number | null
          gobierno: number | null
          hogares: number | null
          otros: number | null
          total: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          comercial?: number | null
          gobierno?: number | null
          hogares?: number | null
          otros?: number | null
          total?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          comercial?: number | null
          gobierno?: number | null
          hogares?: number | null
          otros?: number | null
          total?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      telefonia_fija_accesos_provincias: {
        Row: {
          anio: number | null
          comercial: number | null
          created_at: string
          gobierno: number | null
          hogares: number | null
          id: number
          otros: number | null
          provincia: string | null
          total: number | null
          trimestre: number | null
        }
        Insert: {
          anio?: number | null
          comercial?: number | null
          created_at?: string
          gobierno?: number | null
          hogares?: number | null
          id?: number
          otros?: number | null
          provincia?: string | null
          total?: number | null
          trimestre?: number | null
        }
        Update: {
          anio?: number | null
          comercial?: number | null
          created_at?: string
          gobierno?: number | null
          hogares?: number | null
          id?: number
          otros?: number | null
          provincia?: string | null
          total?: number | null
          trimestre?: number | null
        }
        Relationships: []
      }
      telefonia_fija_ingresos: {
        Row: {
          anio: number
          ingresos: number | null
          trimestre: number
        }
        Insert: {
          anio: number
          ingresos?: number | null
          trimestre: number
        }
        Update: {
          anio?: number
          ingresos?: number | null
          trimestre?: number
        }
        Relationships: []
      }
      telefonia_fija_penetracion: {
        Row: {
          accesos_100_hab: number | null
          accesos_100_hog: number | null
          anio: number
          trimestre: number
        }
        Insert: {
          accesos_100_hab?: number | null
          accesos_100_hog?: number | null
          anio: number
          trimestre: number
        }
        Update: {
          accesos_100_hab?: number | null
          accesos_100_hog?: number | null
          anio?: number
          trimestre?: number
        }
        Relationships: []
      }
      telefonia_fija_penetracion_provincias: {
        Row: {
          accesos_100_hab: number | null
          accesos_100_hog: number | null
          anio: number | null
          created_at: string
          id: number
          provincia: string | null
          trimestre: number | null
        }
        Insert: {
          accesos_100_hab?: number | null
          accesos_100_hog?: number | null
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
        }
        Update: {
          accesos_100_hab?: number | null
          accesos_100_hog?: number | null
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
        }
        Relationships: []
      }
      tv_accesos: {
        Row: {
          anio: number
          trimestre: number
          tv_satelital: number | null
          tv_suscripcion: number | null
        }
        Insert: {
          anio: number
          trimestre: number
          tv_satelital?: number | null
          tv_suscripcion?: number | null
        }
        Update: {
          anio?: number
          trimestre?: number
          tv_satelital?: number | null
          tv_suscripcion?: number | null
        }
        Relationships: []
      }
      tv_accesos_provincias: {
        Row: {
          anio: number | null
          created_at: string
          id: number
          provincia: string | null
          trimestre: number | null
          tv_suscripcion: number | null
        }
        Insert: {
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
          tv_suscripcion?: number | null
        }
        Update: {
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
          tv_suscripcion?: number | null
        }
        Relationships: []
      }
      tv_ingresos: {
        Row: {
          anio: number
          trimestre: number
          tv_satelital: number | null
          tv_suscripcion: number | null
        }
        Insert: {
          anio: number
          trimestre: number
          tv_satelital?: number | null
          tv_suscripcion?: number | null
        }
        Update: {
          anio?: number
          trimestre?: number
          tv_satelital?: number | null
          tv_suscripcion?: number | null
        }
        Relationships: []
      }
      tv_penetracion: {
        Row: {
          anio: number
          trimestre: number
          tv_satelital_100_habitantes: number | null
          tv_satelital_100_hogares: number | null
          tv_suscripcion_100_habitantes: number | null
          tv_suscripcion_100_hogares: number | null
        }
        Insert: {
          anio: number
          trimestre: number
          tv_satelital_100_habitantes?: number | null
          tv_satelital_100_hogares?: number | null
          tv_suscripcion_100_habitantes?: number | null
          tv_suscripcion_100_hogares?: number | null
        }
        Update: {
          anio?: number
          trimestre?: number
          tv_satelital_100_habitantes?: number | null
          tv_satelital_100_hogares?: number | null
          tv_suscripcion_100_habitantes?: number | null
          tv_suscripcion_100_hogares?: number | null
        }
        Relationships: []
      }
      tv_penetracion_provincias: {
        Row: {
          anio: number | null
          created_at: string
          id: number
          provincia: string | null
          trimestre: number | null
          tv_suscripcion_100habitantes: number | null
          tv_suscripcion_100hogares: number | null
        }
        Insert: {
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
          tv_suscripcion_100habitantes?: number | null
          tv_suscripcion_100hogares?: number | null
        }
        Update: {
          anio?: number | null
          created_at?: string
          id?: number
          provincia?: string | null
          trimestre?: number | null
          tv_suscripcion_100habitantes?: number | null
          tv_suscripcion_100hogares?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
