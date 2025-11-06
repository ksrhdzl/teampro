use sqlx::{Executor, Pool, Postgres};

pub const NAME: &str = "1577836801000";

pub async fn up(pool: &Pool<Postgres>) -> sqlx::Result<()> {
    pool.execute(
        r#"
        CREATE TABLE asset (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR,
            description VARCHAR,
            slug VARCHAR NOT NULL,
            source VARCHAR NOT NULL,
            type VARCHAR,
            size VARCHAR
        )   
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TABLE workspace (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR NOT NULL,
            slug VARCHAR NOT NULL,
            description VARCHAR,
            image VARCHAR
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TABLE "user" (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR NOT NULL,
            slug VARCHAR,
            email VARCHAR NOT NULL,
            password VARCHAR NOT NULL
        )
    "#,
    )
    .await?;

    // @Column({ type: 'varchar', nullable: true, transformer: transformer.date })
    // emailVerified!: string | null;
    // @OneToMany(() => AuthEntity, (obj) => obj.user, {
    //   nullable: true,
    // })
    // auths!: AuthEntity[];
    // @Column({ name: 'is_two_factor_enabled', type: 'boolean', default: false })
    // isTwoFactorEnabled!: string;

    // @OneToMany(() => AuthTwoFactorConfirmationEntity, (obj) => obj.user, {
    //   nullable: true,
    // })
    // twoFactorConfirmation?: AuthTwoFactorConfirmationEntity[];

    // @OneToMany(() => SessionEntity, (session) => session.userId)
    // sessions!: SessionEntity[];

    pool.execute(
        r#"
        CREATE TABLE session (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            session VARCHAR NOT NULL,
            expires BIGINT NOT NULL,
            // expiresAt BIGINT NOT NULL,
            user_id INT NOT NULL,
            CONSTRAINT fk_session_user FOREIGN KEY (user_id) REFERENCES "user"(id)
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE role_status_enum AS ENUM ('active', 'inactive');
        
        CREATE TABLE role (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR NOT NULL,
            description VARCHAR,
            slug VARCHAR NOT NULL UNIQUE,
            permissions VARCHAR[] NOT NULL DEFAULT '{}',
            status role_status_enum NOT NULL DEFAULT 'inactive'
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE operator_status_enum AS ENUM ('active', 'inactive');
        
        CREATE TABLE operator (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            first_name VARCHAR NOT NULL,
            last_name VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            status operator_status_enum NOT NULL DEFAULT 'inactive'
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TABLE role_operator (
            role_id INT NOT NULL,
            operator_id INT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (role_id, operator_id),
            CONSTRAINT fk_role_operator_role FOREIGN KEY (role_id) REFERENCES role(id),
            CONSTRAINT fk_role_operator_operator FOREIGN KEY (operator_id) REFERENCES operator(id)
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TABLE project (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR NOT NULL,
            slug VARCHAR NOT NULL,
            description VARCHAR,
            -- type VARCHAR,
            workspace_id INT NOT NULL,
            CONSTRAINT fk_project_workspace FOREIGN KEY (workspace_id) REFERENCES workspace(id) ON DELETE CASCADE
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TABLE message (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            content VARCHAR NOT NULL,
            type VARCHAR NOT NULL,
            workspace_id INT NOT NULL,
            member_id INT NOT NULL,
            // parent_id
            // many to many issues
            // table SEEN MESSAGES
            // messageID
            // memberID
            CONSTRAINT fk_message_workspace FOREIGN KEY (workspace_id) REFERENCES workspace(id) ON DELETE CASCADE,
            CONSTRAINT fk_message_member FOREIGN KEY (member_id) REFERENCES member(id)
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TABLE message_conversation (
            message_id INT NOT NULL,
            conversation_id INT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (message_id, conversation_id),
            CONSTRAINT fk_message_conversation_message FOREIGN KEY (message_id) REFERENCES message(id),
            CONSTRAINT fk_message_conversation_conversation FOREIGN KEY (conversation_id) REFERENCES conversation(id)
        )
    "#,
    )
    .await?;

    //   ADMIN //   MODERATOR //   GUEST
    pool.execute(
        r#"
        CREATE TYPE member_role_enum AS ENUM ('manager', 'member');
        
        CREATE TABLE member (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            role member_role_enum NOT NULL DEFAULT 'member',
            workspace_id INT NOT NULL,
            user_id INT NOT NULL,
            CONSTRAINT fk_member_workspace FOREIGN KEY (workspace_id) REFERENCES workspace(id) ON DELETE CASCADE,
            CONSTRAINT fk_member_user FOREIGN KEY (user_id) REFERENCES "user"(id),
            UNIQUE (workspace_id, user_id)
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE member_project_role_enum AS ENUM ('manager', 'member');
        
        CREATE TABLE member_project (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            member_id INT NOT NULL,
            project_id INT NOT NULL,
            role member_project_role_enum NOT NULL DEFAULT 'member',
            CONSTRAINT fk_member_project_member FOREIGN KEY (member_id) REFERENCES member(id),
            CONSTRAINT fk_member_project_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE member_issue_role_enum AS ENUM ('manager', 'member');
        
        CREATE TABLE member_issue (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            member_id INT NOT NULL,
            issue_id INT NOT NULL,
            role member_issue_role_enum NOT NULL DEFAULT 'member',
            CONSTRAINT fk_member_issue_member FOREIGN KEY (member_id) REFERENCES member(id),
            CONSTRAINT fk_member_issue_issue FOREIGN KEY (issue_id) REFERENCES issue(id) ON DELETE CASCADE
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE member_conversation_role_enum AS ENUM ('manager', 'member');
        
        CREATE TABLE member_conversation (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            member_id INT NOT NULL,
            conversation_id INT NOT NULL,
            role member_conversation_role_enum NOT NULL DEFAULT 'member',
            CONSTRAINT fk_member_conversation_member FOREIGN KEY (member_id) REFERENCES member(id),
            CONSTRAINT fk_member_conversation_conversation FOREIGN KEY (conversation_id) REFERENCES conversation(id) ON DELETE CASCADE
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE issue_status_enum AS ENUM ('backlog', 'todo', 'in progress', 'in review', 'done');
        
        CREATE TABLE issue (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR NOT NULL,
            slug VARCHAR NOT NULL,
            description VARCHAR,
            workspace_id INT NOT NULL,
            project_id INT NOT NULL,
            position INT NOT NULL,
            status issue_status_enum NOT NULL DEFAULT 'todo',
            start_at TIMESTAMP,
            end_at TIMESTAMP,
            // parent_id
            // mtom messages
            CONSTRAINT fk_issue_workspace FOREIGN KEY (workspace_id) REFERENCES workspace(id) ON DELETE CASCADE,
            CONSTRAINT fk_issue_project FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
        )
    "#,
    )
    .await?;

    pool.execute(
        r#"
        CREATE TYPE conversation_type_enum AS ENUM ('chat', 'call', 'meet', 'group', 'channel');
        
        CREATE TABLE conversation (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            metadata JSONB,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP,
            deleted_at TIMESTAMP,
            version INT NOT NULL DEFAULT 0,
            name VARCHAR,
            type conversation_type_enum NOT NULL,
            slug VARCHAR,
            description VARCHAR,
            workspace_id INT NOT NULL,
            CONSTRAINT fk_conversation_workspace FOREIGN KEY (workspace_id) REFERENCES workspace(id) ON DELETE CASCADE
        )
    "#,
    )
    .await?;

    Ok(())
}

pub async fn down(pool: &Pool<Postgres>) -> sqlx::Result<()> {
    pool.execute("DROP TABLE mmmobina").await?;
    Ok(())
}
